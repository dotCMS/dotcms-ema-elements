import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'dotcms-ema-container',
  shadow: true
})
export class DotcmsEmaContainer {
  @Prop() container = {
    acceptTypes: '',
    inode: '',
    identifier: '',
    uuid: '',
    maxContentlets: ''
  };
  render() {
    const { acceptTypes, inode, identifier, uuid, maxContentlets } = this.container;

    return (
      <Host
        style={{ display: 'block' }}
        data-dot-accept-types={acceptTypes}
        data-dot-object="container"
        data-dot-inode={inode}
        data-dot-identifier={identifier}
        data-dot-uuid={uuid}
        data-max-contentlets={maxContentlets}
        data-dot-can-add="CONTENT,FORM,WIDGET"
      >
        <slot />
      </Host>
    );
  }
}
