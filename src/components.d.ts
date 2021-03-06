/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DotcmsEmaContainer {
    'container': { acceptTypes: string; inode: string; identifier: string; uuid: string; maxContentlets: string; };
  }
  interface DotcmsEmaContentlet {
    'contentlet': { inode: string; identifier: string; contentType: string; baseType: string; dotLang: string; title: string; dotCanEdit: string; dotContentTypeId: string; };
  }
}

declare global {


  interface HTMLDotcmsEmaContainerElement extends Components.DotcmsEmaContainer, HTMLStencilElement {}
  const HTMLDotcmsEmaContainerElement: {
    prototype: HTMLDotcmsEmaContainerElement;
    new (): HTMLDotcmsEmaContainerElement;
  };

  interface HTMLDotcmsEmaContentletElement extends Components.DotcmsEmaContentlet, HTMLStencilElement {}
  const HTMLDotcmsEmaContentletElement: {
    prototype: HTMLDotcmsEmaContentletElement;
    new (): HTMLDotcmsEmaContentletElement;
  };
  interface HTMLElementTagNameMap {
    'dotcms-ema-container': HTMLDotcmsEmaContainerElement;
    'dotcms-ema-contentlet': HTMLDotcmsEmaContentletElement;
  }
}

declare namespace LocalJSX {
  interface DotcmsEmaContainer {
    'container'?: { acceptTypes: string; inode: string; identifier: string; uuid: string; maxContentlets: string; };
  }
  interface DotcmsEmaContentlet {
    'contentlet'?: { inode: string; identifier: string; contentType: string; baseType: string; dotLang: string; title: string; dotCanEdit: string; dotContentTypeId: string; };
  }

  interface IntrinsicElements {
    'dotcms-ema-container': DotcmsEmaContainer;
    'dotcms-ema-contentlet': DotcmsEmaContentlet;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'dotcms-ema-container': LocalJSX.DotcmsEmaContainer & JSXBase.HTMLAttributes<HTMLDotcmsEmaContainerElement>;
      'dotcms-ema-contentlet': LocalJSX.DotcmsEmaContentlet & JSXBase.HTMLAttributes<HTMLDotcmsEmaContentletElement>;
    }
  }
}


