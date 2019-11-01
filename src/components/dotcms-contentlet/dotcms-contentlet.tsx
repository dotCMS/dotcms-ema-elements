import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'dotcms-contentlet',
  shadow: true
})
export class DotcmsContentlet {
  @Prop() contentlet = {
    inode: '',
    identifier: '',
    contentType: '',
    baseType: '',
    dotLang: '',
    title: '',
    dotCanEdit: '',
    dotContentTypeId: ''
  };
  render() {
    const { inode, identifier, contentType, baseType, dotLang, title, dotCanEdit, dotContentTypeId } = this.contentlet;

    return (
      <Host
        style={{ display: 'block' }}
        data-dot-object="contentlet"
        data-dot-inode={inode}
        data-dot-identifier={identifier}
        data-dot-type={contentType}
        data-dot-basetype={baseType}
        data-dot-lang={dotLang}
        data-dot-title={title}
        data-dot-can-edit={`${dotCanEdit}`}
        data-dot-content-type-id={dotContentTypeId}
        data-dot-has-page-lang-version="true"
      >
        <slot />
      </Host>
    );
  }
}
