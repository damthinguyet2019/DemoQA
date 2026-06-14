# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBoxTest.spec.ts >> Check Box Test >> TC01-Click Expand All button
- Location: tests\CheckBoxTest.spec.ts:12:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /expand all/i })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e14] [cursor=pointer]:
          - generic [ref=e15]:
            - img [ref=e17]
            - text: Elements
          - img [ref=e22]
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
              - img [ref=e28]
              - text: Text Box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
              - img [ref=e32]
              - text: Check Box
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
              - img [ref=e36]
              - text: Radio Button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
              - img [ref=e40]
              - text: Web Tables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
              - img [ref=e44]
              - text: Buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
              - img [ref=e48]
              - text: Links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
              - img [ref=e52]
              - text: Broken Links - Images
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
              - img [ref=e56]
              - text: Upload and Download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
              - img [ref=e60]
              - text: Dynamic Properties
      - generic [ref=e64] [cursor=pointer]:
        - generic [ref=e65]:
          - img [ref=e67]
          - text: Forms
        - img [ref=e73]
      - generic [ref=e77] [cursor=pointer]:
        - generic [ref=e78]:
          - img [ref=e80]
          - text: Alerts, Frame & Windows
        - img [ref=e85]
      - generic [ref=e89] [cursor=pointer]:
        - generic [ref=e90]:
          - img [ref=e92]
          - text: Widgets
        - img [ref=e98]
      - generic [ref=e102] [cursor=pointer]:
        - generic [ref=e103]:
          - img [ref=e105]
          - text: Interactions
        - img [ref=e110]
      - generic [ref=e114] [cursor=pointer]:
        - generic [ref=e115]:
          - img [ref=e117]
          - text: Book Store Application
        - img [ref=e122]
    - generic [ref=e124]:
      - heading "Check Box" [level=1] [ref=e125]
      - generic [ref=e127]:
        - generic:
          - textbox "for screen reader"
        - tree [ref=e128]:
          - treeitem "Select Home Home" [ref=e132]:
            - checkbox "Select Home" [ref=e134] [cursor=pointer]
            - generic "Home" [ref=e135] [cursor=pointer]:
              - generic [ref=e137]: Home
    - iframe [ref=e146]:
      - generic [ref=f8e2]:
        - link "Advertisement" [ref=f8e4] [cursor=pointer]:
          - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsugyOak1tbwOUkKRW1KazVBHcJByqGAk5qHWrxi8Ih5hjJ5cdnGBm4WYGi_KYI0CQ_AP5W9vD2UEHt2EbjiOmeTKACpXpuVYuCHemifGhobzNHRSM8dxbPon8uUt_erIv-vlGTr8Xm4FoX8VUc3L4DDNf1q5EHfyowTcSkRBaKh2zCMtMQ4guuTzLd-GWbZmUwQEGZJJ34sOlo7j7bFvftIGMyqrvJV9w0C0SNlZcQ4tJNPU4_nHak_XpO6j9v2R1ha_RH2CMXJGU9gZcyHpo6lctEt3bH1-PwtJvJEzr4mwsOn_Hyal6dRGn-ONXnes-wariyyvRcg1nAphulIUo3M08T0KBfczaWDmYfcG-YYNIR3K0t0oPJE1TJmacmnUxeeRHiXaoMKfLvxxA-F7zPtnpVZWlr8UJKhStDS_OK41OxhYdi1bueAdBjx4P8jVkJ1_0bacrZItF2Ct7qG2SHBHEqA8eIbFqu_-ijWSRBYnL5TI3jo83ImnF0fTIggPPZzTePrxx_5S1VEi3GjUVjYZZa_dDVHoDBKhe88kxIbt1klTQWypzrP1JEplLXtNDCBf-iNeJoqfaIFv3KHBgad4nq1XCmnsBXUuQQVM6f8UYxIHahL4q-r1J8X2gwBARuS1JCn6bec2C-5R_MlDGNFF2Gtob3xp9q4MKz5-SDu6YlcjXFoaxn9cXd6jdNqcpAT2NlxbTfs0DFpDpyOATBVBUA1I6gav6aw4gSsM8gKThroqIshSGWz8EWwAzUfQn_N3kcShhUsClunFVxWchT5GF_hnKU2EencwFMun2b3GGsKmosJfpo7AAKuW872iO2S8JvbJ0q8EAk-KplEC-dx5lnDWtNh2dSKCm_ySitj_EQtjYfrJs3T_42CdXr_qnXosclCEVLCZj9JaqXTxZnkt6r5v3je90ZdOaduwMPlLaHjLbtHkA_D7ezq4l3oMv8Z0dSsw_6O-ulaCBCUVqOhq2hNae4d99vC6HwVx5T_uJaFO0Dzo9n85qLXcmilC6tWLh0jgakFgLS5ZjmjncfIQmXp3ogct_E6wNLiEwfH9iqxYw-11srE8umo6VMaIZoeDnWwL_wXsl_hASywJ80FGTauGGxltnGlmmGFMl2FRClWBDdgBs3FavOvqOMmZy7Jby_hwGRYzKBv6rlNDQ7qMZWUjFMbKqqradYxCJ5dEtVoDZk2pjifINYBCsGNin4XVyNlHuoK31Eq_1_SKrpdn2fIE2wavEiIL4B75zwxbns1OG6Ag0XDLcqtrHQ1Pkp7lYEcCbZTnr8RoM_nFkFCN8ieGp4T1tvIYUBP1GnYpochpQ4MItkUscczWZw7imvZJiJUxDwzFN89MRBi5j2LFOa4KMlwFbO3pzO_2kJr70vLvl3sM0-E8Fe1x0a3lLKr8kEEXcK6a7LveXKIKb1YQxjsKoLvBqdMEn9BhGueLRwBHmOsixb_ICzQS3iBXoCG89GoNr67wbvClyJIw3ExwRUB1_2mYnZskgcT96H6jwgeXCJ8ePXseN1ablkCOlsjXXFfkhMNzw3tXPOF19D5B88XDpgvUF4eK_KxsVeRdkN258EIcses6dV1JAFTdxfsZjNfmbpN3wwIgHTZtsFK_WsCfc4cJbYd2QQJb8Xo8KmE8NvvJnsBEG9Nw7uoP59BvWCVH5sdFfTCpJHo144-gQEPY8zFRHhsW31PoGYpVmkzjbPdDkPS4R7UIaT4HAJ1Sj-4rgoqaMghhy38pTNGWS7TOxz8MdN0wWI2IjuubrjiSVJOa2O3HBN-1hePX-DjApQhgsCrtWz_osJvlP3JIHkGo1nQ6hiNHoc9wAr8W_EGnFtAkH9eMmiH6e6FK4i_phmFzW2p19skWWy6rTs9IYzzUx9ir7NFLGNG-zwp99MOLsfcNjkZdv60b8jiiDL9gqCVYAg3X84fvPOC4w&sai=AMfl-YSDck-GRKNuSeyZq_A5k6XKaFiiBPO49XhURhG4VRzZ5yAzvxHF6HRAk2PWo_6qJl0_oF-WeM8NobpYxROU5B867xbtMMldUDy84diZYgRqiKm2mUvlDrg2TcpIxVluH6ES6BbZELBgMKJ3SnHtKER0IAGs6EJEfPK4hciZF-In-m5NV98sqfzA8ikQjpijsYo4o2P-NT_OGHlKU5U-Qq00EVmSy2Rb6tX-AUi0xXtvF1eQdhykwKbRebCwCnzyHPUqK9ImSwHW3ZBSNKAsMKCuv_FkAeeJBg7NuRJrZEd9F5qTbtN-N2XLS0fIZorcE_CW4qPzbBCSQuZyEdXsiLXoEIbqDNc5Twe6MSUebDjUH0J4w00dzE4SUiR2qI_uX_X-LtLg-_v4IsMMZ2zBZf3gkAmZMwqZu2ApGcVrdJ_5Xobo39Bz7O-jnEExfVUNR2z6IZju1DlsebH_PpioUcPlTeWQznTIqiJ8JihtQOhnhAxTYFVp4SKVe_ia4St7AgKJEYAypZ3e_Vv9iYtjlOANTC95Cqs_W78Ak1gXh6Rt1ECLMdR_QZlVeQJW-M6mhJO0Ee8AGRT8rUoazB1NmGa_l7hyh_KlSiq2FytrQiDsrWz_YRXEMydTviFaCcsXU0-O1pJz6iweCATpRpKfV8g5Vq_VjeFdJc5O0qWqnosGhENHb9t60P2OPSBat6HFAY-lJXuZF99Xi217wNnDvff84P9dNkkpYPF_TVyPOXr4EyPmOs5SBB9RI3k-AXZ1ZjerYgC4hIKovhMsuQG4Wk-pw4lElRWEzT4f5Dt7kMMEz1EVIRlFOeNlZXh5zO9FtN32cwBgd72-G6j-ty9F7MtXp0Szbpiv_JKW-jj1vagolJMDhtQKvHWuJ3lqnmo0OWAqtLK2vrJqOFPYD4n7yolTCPu5csZVYZLmDitOE00dx_F53RIZnKiMVsR-MEx9rO9K-__8kBdiwjRw6euHSlsSz6ZJRT6KDvFm-kHY&sig=Cg0ArKJSzI_iTwDpOzKI&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9icml0aXNoY291bmNpbC52bg&urlfix=1&adurl=https://www.britishcouncil.vn/success-starts-here%3Futm_source%3Ddv360%26utm_medium%3Ddisplay%26utm_campaign%3Dexams-all-all-ea-vn-dv360-pt-awareness-ielts_mini_mock_template-display-300x250%26utm_content%3Dcontent%26utm_term%3Dterm%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23798157486
          - img "Advertisement" [ref=f8e5]
        - generic [ref=f8e6]:
          - generic:
            - img [ref=f8e10] [cursor=pointer]
            - button [ref=f8e12] [cursor=pointer]:
              - img [ref=f8e13]
  - contentinfo [ref=e147]:
    - generic [ref=e148]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class CheckBoxPage {
  4  |     readonly page: Page;
  5  |     readonly expandAllButton: Locator;
  6  |     readonly collapseAllButton: Locator;
  7  |     readonly checkBoxHome: Locator;
  8  |     readonly checkBoxListDesktop: Locator;
  9  |     readonly checkBoxListDocuments: Locator;
  10 |     readonly checkBoxListDownloads: Locator;
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page;
  14 |         this.expandAllButton = page.getByRole('button', { name: /expand all/i });
  15 |         this.collapseAllButton = page.getByRole('button', { name: /collapse all/i });
  16 |         this.checkBoxHome = page.locator('input#tree-node-home');
  17 |         this.checkBoxListDesktop = page.locator('label[for="tree-node-0"]');
  18 |         this.checkBoxListDocuments = page.locator('label[for="tree-node-1"]');
  19 |         this.checkBoxListDownloads = page.locator('label[for="tree-node-2"]');
  20 |     }
  21 | async goTo() {
  22 |     await this.page.goto("/checkbox");
  23 | }
  24 | async clickExpandAllButton() {
> 25 |     await this.expandAllButton.click();
     |                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  26 | }
  27 | async clickCollapseAllButton() {
  28 |     await this.collapseAllButton.click();
  29 | }
  30 | }
```