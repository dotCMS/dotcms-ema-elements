import { newE2EPage } from '@stencil/core/testing';

describe('dotcms-ema-contentlet', () => {
  let page;
  let element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<dotcms-ema-contentlet></dotcms-ema-contentlet>');
    element = await page.find('dotcms-ema-contentlet');
    element.setProperty('contentlet', {
      inode: '123',
      identifier: '456',
      contentType: 'WebPageContent',
      baseType: 'CONTENT',
      dotLang: '1',
      title: 'This is a title',
      dotCanEdit: true,
      dotContentTypeId: '789'
    });
    await page.waitForChanges();
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });

  it('renders data attr', async () => {
    expect(element.getAttribute('data-dot-object')).toBe('contentlet');
    expect(element.getAttribute('data-dot-inode')).toBe('123');
    expect(element.getAttribute('data-dot-identifier')).toBe('456');
    expect(element.getAttribute('data-dot-type')).toBe('WebPageContent');
    expect(element.getAttribute('data-dot-basetype')).toBe('CONTENT');
    expect(element.getAttribute('data-dot-lang')).toBe('1');
    expect(element.getAttribute('data-dot-title')).toBe('This is a title');
    expect(element.getAttribute('data-dot-can-edit')).toBe('true');
    expect(element.getAttribute('data-dot-content-type-id')).toBe('789');
    expect(element.getAttribute('data-dot-has-page-lang-version')).toBe('true');
  });
});
