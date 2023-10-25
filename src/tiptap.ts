import {TipTapNode} from '@troop.com/tiptap-react-render';

export var tiptapNode: TipTapNode = {
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: {
        textAlign: 'left',
        level: 2,
      },
      content: [
        {
          type: 'text',
          text: 'Guidelines',
        },
      ],
    },
    {
      type: 'bulletList',
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: 'Open only for those initiated into Shambhavi Kriya.',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                textAlign: 'left',
              },
              content: [
                {
                  type: 'text',
                  text: 'Please ensure the Satsang is not attended by anyone who has not been initiated into Shambhavi, including family members.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// {
//   type: 'doc',
//   content: [
//     {
//       type: 'heading',
//       attrs: {
//         textAlign: 'justify',
//         level: 2,
//       },
//       content: [
//         {
//           type: 'text',
//           text: 'Next Satsang',
//         },
//       ],
//     },
//   ],
// };

//  {
//   type: 'doc',
//   content: [
//     {
//       type: 'paragraph',
//       attrs: {
//         textAlign: 'justify',
//       },
//       content: [
//         {
//           type: 'text',
//           text: 'Program for meditators, which includes guided practices, meditations, Q&A sessions, and Sadhguru videos.',
//         },
//       ],
//     },
//   ],
// };
