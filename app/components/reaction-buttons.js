import Component from '@glimmer/component';

export default class ReactionButtonsComponent extends Component {
  emojis = [
    { name: 'thumbsUp', icon: '👍' },
    {
      name: 'wow',
      icon: '😮',
    },
    { name: 'heart', icon: '❤️' },
    {
      name: 'rocket',
      icon: '🚀',
    },
    { name: 'coffee', icon: '☕' },
  ];
}
