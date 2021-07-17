import React from 'react';
import PropTypes from 'prop-types'
import {Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import BookSearch from './BookSearch'

const {height, width} = Dimensions.get('screen');

export default class GoogleBookSearch extends React.Component {
    static propTypes = {
        apikey: PropTypes.string,
        placeholder: PropTypes.string,
        limit: PropTypes.number,
        onTextChange: PropTypes.func,
        searchContainerStyle: PropTypes.object,
        searchInputStyle: PropTypes.object,
        resultContainerStyle: PropTypes.object,
        resultItemStyle: PropTypes.object,
        showSearchResult: PropTypes.bool,
        searchResult: PropTypes.func,
        onResultPress: PropTypes.func,
        keyboardType: PropTypes.string,
        returnKeyType: PropTypes.string,
        onSubmitEditing: PropTypes.func,
        value: PropTypes.string,
        interval: PropTypes.number
    };
    static defaultProps = {
        apikey: "",
        theme: 'light',
        placeholder: "🔍 search",
        keyboardType: 'default',
        returnKeyType: 'done',
        value: "",
        limit: -1,
        showSearchResult: true,
        interval: 800
    };

    constructor(props) {
        super(props);
        this.state = {
            gbooks: [],
            typing: false,
            typingTimeout: 0,
            showcontainer: true,
            searchval: this.props.value
        }
        this.searchBook = this.searchBook.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onResultPress = this.onResultPress.bind(this);
        this.searchResult = this.searchResult.bind(this);
    }

    renderGBooks(item, index) {
        let book = item;
        let name = item.volumeInfo.title
        var thumbnail = {
            small: "",
            normal: ""
        }
        if (book.volumeInfo !== undefined
            && book.volumeInfo.imageLinks !== undefined) {
            thumbnail.small = book.volumeInfo.imageLinks.smallThumbnail !== undefined ? book.volumeInfo.imageLinks.smallThumbnail : null;
            thumbnail.normal = book.volumeInfo.imageLinks.thumbnail !== undefined ? book.volumeInfo.imageLinks.thumbnail : null;
        }
        let obj = {
            id: item.id,
            title: name,
            authors: item.volumeInfo.authors,
            isbn: item.volumeInfo.industryIdentifiers,
            raw: item,
            smallThumbnail: thumbnail.small,
            thumbnail: thumbnail.normal
        }

        return (
            <TouchableHighlight
                keyboardShouldPersistTaps='handled'
                onPress={
                    () => this.onResultPress(obj)
                }
                underlayColor={'transparent'}
            >
                <View style={[styles.resultItem, {...this.props.resultContainerStyle}]}>
                    <Text style={{...this.props.resultItemStyle}}>{obj.title}</Text>
                </View>

            </TouchableHighlight>
        )
    }

    onResultPress(book) {
        if (this.props.onResultPress !== undefined) {
            this.setState({showcontainer: false, searchval: ""})
            this.props.onResultPress(book, this.state.gbooks)
        }
    }

    searchResult() {
        if (this.props.searchResult !== undefined) {
            this.props.searchResult(this.state.gbooks)
        }
    }

    onTextChange(val) {
        this.setState({searchval: val})
        if (!(val.length !== 0)) {
            this.setState({showcontainer: false})
        }
        if (val.length > 1) {
            if (!this.state.showcontainer) {
                this.setState({showcontainer: true})
            }
            const self = this;

            if (self.state.typingTimeout) {
                clearTimeout(self.state.typingTimeout);
            }
            self.setState({
                typing: false,
                typingTimeout: setTimeout(function () {
                    self.searchBook(val);
                }, self.props.interval)
            });
        }
    }

    async searchBook(val) {
        let self = this;
        if (val.length > 1) {
            let res = await BookSearch.searchbook(val, this.props.apikey);
            if (res.status
                && res.data !== undefined) {
                var booksArray = res.data;
                let booksSet = new Set();
                booksArray = booksArray.filter(book => {
                    if (booksSet.has(book.volumeInfo.title)) {
                        return false
                    } if(book.volumeInfo.title.length > 80) {
                        return false
                    } else {
                        booksSet.add(book.volumeInfo.title)
                        return true
                    }
                })
                if (self.props.limit !== -1) {
                    if (booksArray.length > self.props.limit) {
                        booksArray = booksArray.slice(0, self.props.limit);
                    }
                }
                this.setState({gbooks: booksArray}, () => {
                    self.searchResult()
                })
            }
        }

    }

    render() {
        return (
            <View style={[styles.container, {...this.props.searchContainerStyle}]}>

                <TextInput
                    value={this.state.searchval}
                    style={[styles.input, {...this.props.searchInputStyle}]}
                    placeholder={this.props.placeholder}
                    clearButtonMode={'while-editing'}
                    onChangeText={(text) => this.onTextChange(text)}
                />
                {
                    (this.props.showSearchResult && this.state.showcontainer) ?
                        <View style={styles.resultContainer}>
                            <FlatList
                                keyboardShouldPersistTaps='handled'
                                keyboardDismissMode={'on-drag'}
                                renderItem={(item) => this.renderGBooks(item.item, item.index)}
                                data={this.state.gbooks}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                        :
                        <View/>
                }

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        // zIndex: 10,
        overflow: 'visible',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        height: 40,
        width: width - 35,
        alignSelf: 'center',
        marginTop:20,
        // backgroundColor: "#fff",
        // borderColor:"#f6f6f6",
        // borderWidth:0.7,
        // borderRadius:5,
        // shadowOpacity: 0.0015 * 5 + 0.18,
        // shadowRadius: 0.54 * 5,
        // shadowOffset: {
        //     height: 0.6 * 5,
        // },
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#d4daff',
        fontSize: 15,
        lineHeight: 22.5,
        paddingBottom: 0,
        paddingHorizontal: 10,
        flex: 1,
        // borderWidth:1,
        borderRadius: 5,
    },
    resultContainer: {
        position: 'absolute',
        top: 30,
        // left: 8,
        // right: 8,
        backgroundColor: '#FFF',
        borderRadius: 5,
        flex: 1,
        elevation: 3,
        zIndex: 10,
        shadowOpacity: 0.0015 * 5 + 0.18,
        shadowRadius: 0.54 * 5,
        shadowOffset: {
            height: 0.6 * 5,
        },
    },
    resultItem: {
        height: 40,
        paddingHorizontal: 8,
        paddingVertical: 4,
        justifyContent: 'center',
        borderBottomWidth: 0.8,
        borderBottomColor: "#f6f6f6",
        margin: 2
    },
    resultText: {
        fontWeight: '300',
        alignSelf: 'center'
    }
})
