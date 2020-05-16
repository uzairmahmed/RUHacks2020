import React, { Component } from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';

import { Card, Dialog, PanningProvider } from 'react-native-ui-lib';

import STYLES from "./ComponentStyles.js"
import StoreBook from "./StoreBook.js"


export default class StoreInfo extends Component {
    constructor(props) {
        super(props);
        this.SCROLL_TYPE = {
            NONE: 'none',
            VERTICAL: 'vertical',
            HORIZONTAL: 'horizontal'
        };
        this.state = {
            panDirection: PanningProvider.Directions.DOWN,
            position: 'center',
            scroll: "vertical",
            showHeader: false,
            isRounded: true,
            showDialog: false
        };
    }

    fadeInNOut = () => {
        this.setState({ showDialog: true }); //run with an anim

        delay()
    };


    showDialog = () => {
        this.setState({ showDialog: true });
    };

    hideDialog = () => {
        this.setState({ showDialog: false });
    };

    renderDialog = (name) => {
        const { showDialog, panDirection, position, scroll, showHeader, isRounded } = this.state;
        const renderPannableHeader = showHeader ? this.renderPannableHeader : undefined;
        const height = scroll !== this.SCROLL_TYPE.NONE ? '70%' : undefined;
        return (
            <Dialog
                migrate
                useSafeArea
                top={position === 'top'}
                bottom={position === 'bottom'}
                height={height}
                panDirection={panDirection}
                visible={showDialog}
                onDismiss={this.hideDialog}
                renderPannableHeader={renderPannableHeader}
                pannableHeaderProps={this.pannableTitle}
                supportedOrientations={this.supportedOrientations}
            >
                <StoreBook
                    storename={this.props.name}
                    username={"John Doe"}
                ></StoreBook>
            </Dialog>
        );
    };


    render() {
        var visibility = this.props.visible;
        var name = this.props.name;
        var address = this.props.address;

        return (
            <View>
                <TouchableOpacity onPress={this.showDialog}>
                    <Card style={STYLES.store_item}>
                        <Text>
                            {name}
                        </Text>
                        <Text>
                            {address}
                        </Text>
                    </Card>
                </TouchableOpacity>
                {this.renderDialog()}
            </View>
        )
    }
}