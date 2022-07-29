'use babel';

import SlotResmi88View from './slot-resmi-88-view';
import { CompositeDisposable } from 'atom';

export default {

  slotResmi88View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.slotResmi88View = new SlotResmi88View(state.slotResmi88ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.slotResmi88View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'slot-resmi-88:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.slotResmi88View.destroy();
  },

  serialize() {
    return {
      slotResmi88ViewState: this.slotResmi88View.serialize()
    };
  },

  toggle() {
    console.log('SlotResmi88 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
