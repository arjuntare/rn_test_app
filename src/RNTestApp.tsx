import React, {useState} from 'react';
import {
  TipTapRender,
  NodeHandlers,
  NodeHandler,
  TipTapNode,
} from '@troop.com/tiptap-react-render';
import {
  View,
  Text,
  TextStyle,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {tiptapNode} from './tiptap';

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
  },
});

const Doc: NodeHandler = ({children}) => <View>{children}</View>;

const Paragraph: NodeHandler = ({children, node: {attrs}}) => {
  const content = React.Children.toArray(children);

  return (
    <Text style={[styles.paragraph, attrs]} selectable>
      {content.length ? children : '\n'}
    </Text>
  );
};

const Heading: NodeHandler = ({children, node: {attrs}}) => {
  const content = React.Children.toArray(children);

  const fontSize = 28 - attrs?.level * 1.5;

  const fontWeight = `${900 - attrs?.level * 100}`;

  return (
    <Text
      style={[
        styles.paragraph,
        attrs,
        {fontSize: fontSize, fontWeight: fontWeight},
      ]}
      selectable>
      {content.length ? children : '\n'}
    </Text>
  );
};

const TextNode: NodeHandler = ({node}) => {
  const {marks, text} = node;

  const style: TextStyle = marks?.reduce(
    (acc, mark) => {
      switch (mark.type) {
        case 'bold':
          return {...acc, fontWeight: 'bold'};
        case 'italic':
          return {...acc, fontStyle: 'italic'};
        case 'underline':
          return {...acc, textDecorationLine: 'underline'};
        case 'textStyle':
          return mark.attrs?.color ? {...acc, color: mark.attrs.color} : acc;
        default:
          return acc;
      }
    },
    {
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecorationLine: 'none',
      color: 'black',
    },
  );

  return <Text style={style}>{text}</Text>;
};

const OrderedList: NodeHandler = ({children}) => {
  const listItems = React.Children.map(children, (child, index) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'flex-start', gap: 5}}>
        <Text style={{fontWeight: 'bold'}}>{`${index + 1}.`}</Text>
        <View style={{flex: 1}}>{child}</View>
      </View>
    );
  });

  return (
    <View
      style={{
        marginLeft: 10,
      }}>
      {listItems}
    </View>
  );
};

const BulletList: NodeHandler = ({children}) => {
  const listItems = React.Children.map(children, (child, index) => {
    return (
      <View style={{flexDirection: 'row', gap: 5}}>
        <View
          style={{
            borderRadius: 4,
            width: 8,
            height: 8,
            backgroundColor: 'black',
          }}
        />
        <View style={{flex: 1}}>{child}</View>
      </View>
    );
  });

  return (
    <View
      style={{
        marginLeft: 10,
      }}>
      {listItems}
    </View>
  );
};

const ListItem: NodeHandler = ({children}) => <View>{children}</View>;

const Image: NodeHandler = ({node}) => {
  return (
    // <Text>{`Image src - ${node.attrs?.src} attrs - ${JSON.stringify(
    //   node.attrs,
    // )}`}</Text>
    // <View>
    // <ImageBackground
    //   style={{width: 100, height: 100}}
    //   source={{uri: 'https://picsum.photos/id/523/500'}}
    // />
    <ImageBackground
      style={{width: node.attrs?.width, height: node.attrs?.height}}
      source={{uri: node.attrs?.src}}
    />
    // </View>
  );
};

const handlers: NodeHandlers = {
  doc: Doc,
  text: TextNode,
  heading: Heading,
  paragraph: Paragraph,
  orderedList: OrderedList,
  listItem: ListItem,
  image: Image,
  bulletList: BulletList,
};

export const RNTestApp = () => {
  return (
    <ScrollView style={{padding: 5, backgroundColor: 'beige'}}>
      <TipTapRender handlers={handlers} node={tiptapNode} />
    </ScrollView>
  );
};
