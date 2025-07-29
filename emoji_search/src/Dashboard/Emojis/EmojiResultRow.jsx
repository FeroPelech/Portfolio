import { PureComponent } from "react";

export default class EmojiResultRow extends PureComponent {
  render() {
    const { title, symbol } = this.props;
    const codePointHex = symbol.codePointAt(0).toString(16);
  }
}
