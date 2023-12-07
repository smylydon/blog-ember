import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ReactionButtonsComponent extends Component {
  @tracked reactions = this.args.post.reactions;
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

  @action
  reacted(emoji) {
    const emojiName = emoji.name;
    const reactions = this.args.post.reactions;
    reactions[emojiName] = reactions[emojiName] + 1;
    this.reactions = reactions;
  }
}
