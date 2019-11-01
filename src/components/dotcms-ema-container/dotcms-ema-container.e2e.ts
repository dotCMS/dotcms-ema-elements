import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';

describe('dotcms-ema-container', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<dotcms-ema-container></dotcms-ema-container>');
    element = await page.find('dotcms-ema-container');
    element.setProperty('container', {
      acceptTypes: 'type1,type2',
      inode: '123',
      identifier: '456',
      uuid: 'uuid-1',
      maxContentlets: '24'
    });
    await page.waitForChanges();
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });

  it('renders data attr', async () => {
    expect(element.getAttribute('data-dot-object')).toBe('container');
    expect(element.getAttribute('data-dot-accept-types')).toBe('type1,type2');
    expect(element.getAttribute('data-dot-inode')).toBe('123');
    expect(element.getAttribute('data-dot-identifier')).toBe('456');
    expect(element.getAttribute('data-dot-uuid')).toBe('uuid-1');
    expect(element.getAttribute('data-max-contentlets')).toBe('24');
    expect(element.getAttribute('data-dot-can-add')).toBe('CONTENT,FORM,WIDGET');
  });
});
