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
      - iframe [ref=e141]:
        - generic [ref=f6e3]:
          - link [ref=f6e4] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CAhdV3XEtar_hIdyXvcAP-pOOkAzEjq6xhwGU7YKgtxXa2R4QASDG-9Z5YMGt-g2gAay9ys9ByAECqQLEyTyPM-XEPeACAKgDAcgDCKoEgAJP0HZMCK7wsszvosxd9BOARziF8f70KSHMmTBy_dZB86T5_eKugrKDeqoJf1fInMkyOe8eFdskNXEXsYwQpXbZhV8Y9c4LFvn_jeyyAe3ml48Us2aml0W9o8sCB8Sp78MbNAuABR-hoBNXk1P4oDfz0BYS4EQpibc6QUxlwtsB0EzR_P3caJ6neBEzNYzCqM59UE6cnSNP4C6Htx5AlUOzD5Q8-CdwX8cLkDKUIqSA4D4VCuT8lNUWc3cnmYGM7PytssevJbeWf4PIeZo7hJdN9iCLSz48nBKwhX_1i4YX5O3_8MRrAmF7Uz_Zq0JAyUPY7AFJxGvLNKoIuXn4xsZCwATanO_-3QXgBAGIBZafvdRYoAYCgAes9ZqvHKgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMgiAYRABGB0yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliO6rD1voSVA2AB8ggbYWR4LXN1YnN5bi0zNTIwNjE3MzQxNjY1NTkysQnlNFnbU5J-eYAKA5gLAcgLAaIMA5ABAaoNAlZOyA0B4g0TCImpsfW-hJUDFdxLDwId-okDwuoNEwi09LH1voSVAxXcSw8CHfqJA8LwDQKIDv___________wHYEwrQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo2MTY4NTc2NTA1UAa6FwI4AaoYFwkAAAAA4Dv2QBIKNjE2ODU3NjUwNRgBshgJEgLiUBgCIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI_8PL9b6ElQMV3EsPAh36iQPCEAEYASAAEgLgJvD_BwE&num=1&cid=CAQSngIAEQoqge5BZWm6BLJS20P0S5yNkzYzKR4OBum0Wddig5JvHJFNXoViYwQgtzjXi5Ruv4JC6S0x0aExBPeG8nhQ6O84Fxjj4VJSWcJA7BAcVed87Rw2LtP60FR1_VQCzrn6ki8ZmNY5I9a8CLqNgnKRE0J6rWJEenoNir_eYczq0UAHo5lEGCYLX1pb9lkUfQ_ExN_0taqxkNT04_OIqyMS4kID_F5-16zEbJWY8WosJXlJPdopuOBeeMghF9pZrY8bDNmeOJwdOPNBnb2sw0_-gbVxvZ8ylcv9iOthnbs2i3mqQwM6Chs1P32pQIDFZpycsWr3k-vAhZnlnQMJURnVUkX2DuDbW-Nuc2KdWaL-mkKKGBevj6i1WlMWuYCJGAE&sig=AOD64_1Yg9o6kVZxg0HX3Q5xKWWYdFYpFA&client=ca-pub-4573231550355221&rf=5&nx=CLICK_X&ny=CLICK_Y&uap=UACH(platform)&uapv=UACH(platformVersion)&uaa=UACH(architecture)&uam=UACH(model)&uafv=UACH(uaFullVersion)&uab=UACH(bitness)&uaw=UACH(wow64)&uafvl=UACH(fullVersionList)&nb=2&adurl=https://shopee.vn/universal-link/romano_vietnam%3Fdeep_and_web%3D1%26is_seller%3Dtrue%26utm_campaign%3Ds140586149_ss_vn_gdem_roadshampooq126%26utm_medium%3Dseller%26utm_source%3Dgoogle%26utm_content%3Dgoogle%26smtt%3D9%26gad_source%3D5%26gad_campaignid%3D23799484310%26gclid%3DEAIaIQobChMI_8PL9b6ElQMV3EsPAh36iQPCEAEYASAAEgLgJvD_BwE
          - generic [ref=f6e6]:
            - link [ref=f6e8] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskWgiK6o6GkDcsUwztcljSJr91TBDxbCjYbyKlChtRvgfkXqORYHA122mOH16GxXdvl1eXhpmJkWU9EzRu3t76OQnBjviQCH_iNYwPFmnpUgXO14T5_TjUPKYAnyG34UX806Uqx7p64l4ylupoy3I9DetoZvfWJ-shFpUN50XWHvgFvFIPP4JxYfyGRoAkquhL5JDm8-bdWZwf5t9mCNS0I8FUcbVmj8l7lG6_ZS0k4hW6BydU1KPowwtO1nsKADp-0iM7y2-sUPH6pY0j1GES7ZONSCMspcfrWIhoI6MRSP1giN3N3iFRFFc0n3AQMeI_vnnXgBYOQ2GDZjcdtWDj_aTmG6U1S6dn9KtiPRQx0Fx41XU8i5gBmpc_wJz9YqAIjWnsyPAkiiwOBUfPP9oU6ahzi778BNMyGTh7dCN25o5zmcJ-libQ8ky79q2PPAldFakOY1rrtSqihBPELWUtAuhAAogCeYhp0eDjjTTbUKFFR_9bIl0AU_dEqUWHB6PQ5Scrbsz7A0pyip_Fr1n0wLS9A9bCgJ1LA-XDPbiGUWyMwVNYVdTUSd8Rnd4c2rE-QltVZXdvwbvBG5DFHp99nnbCeAHiPkXsbw6DNEdHAva7zxqYcVvcakR8ocl1nTORfihHo713tR5bVzLqz1tqtxcZLHXe2QoRAcrO5gVfciVaFJF86y1NO1R2eFt7tE0plz8noix2RIpzcKsA2rTBdLbD33HvT2u4E8rJny4GqI8SjdfTjP1dhDKc0UDYCXOU-KLXwXR5-WtZQKjd1TbcoOQowsKXM5k6PyDmTN1ZBL0Okc9rDTkvO1DK6SiV5ouO1yT9fbNmc4eLCo7LTRg_In6j0277UdOyaR4LGFXVO3IX6w8aomb9upfG2mvzkW6mu7Ta_nVprX4z0tweJ5DHDD3_8gznViZYvPRqsC9HhOneQ35-Rm81Ktlh63Hdd0dvXH-gejlbkXitgV4ZECm5jp2QGI8pSkOIE_uNrvIt4yfQX_abToFT8gsmmZHOUbiZdNKDeA0NXo65s-C_DZ-T55DtU8iPsPnNGEjKqJDzqFPlnPFLdksvqXObZ7nfymdMfb0KZxL9hKxDEbWyKtfFcyxOtKLcRlpH6HYbqA9vqctUg6wggC9xKjBaHckWe5mlqVFhCziqyoxZk3uLwgZuk_ECWBcj10AgaigEHZeoHqk5zdvA8hmSS2SKOepvKR_8EZmcZ1n3y-7ODW9yEfq7ZbcYLyKKVBFwv-SKmxV9WHdHRwW9M3u6QhfDpxK7KfUWCPkxj-lSV-JB4raZ7D9igKoHPOvYNBpQL-JFj53woWoUf1w7AcOP8g6B6nWrBiuCdOM9TocU7xl087g1gRplK59NAudl4mH7HD-ZwgHKqeyGpXMyODqf36-H5gFnAt3DMXInKlKcvn6tgbf2DAagH_CflvgTk8l0RfjDAz3KyNzp2FDe88I6HNZafsxe9FIZztiFqeB1PAIXIsmLo7JOK2EydKffUt7WXMciXGyZGChNNZZbighmEhMdMClYfV56rSaU8Yw7X62BnL7mpSjShfLhR-Ti1nZ2rN1iI3YNhp-_WWg3Gy-wb2ibvCFt-zGWDaAodGTjRJrZrVTnFRXmKypNRp59poKkAmZ-rYm7gF4om0m_dQ2NFnImh_GJM75OdfEQRonstPTLjEBscV5tPBYSUayLqSSB7-6-OhoZv13msRkn61JE0EXZPIISXdVqSCEItWRnwjL6bOiB8C4-P-9hvABbB8FHQSm6DO-KlxtB9_vAhHf11jbT_vLgKxtW1HRKvx2Li2ybsumn0qwbBKwycp1ZPdYNj1yRLIR6J7O-I01f2VjUoLynE-8FrnyZNoMUPeS7QyxkmJm5YL9ipTt6wkPwzoXhBFvfglQ-99S2kC_bYkaNiw9HpYKjt0Cyna6ozljHNvh4xDwP-kb2DqGpjs8oOab3rDtXWlBttWK4V4UBta_nHh1n-QPGAKdYK5iScq9ML6n1nvGVxLzg_u33b4RJeDTqtiA7T2-2N3qHrXEEUUPybEsPbAqKEgoS1X-RPWnGYhLqVbYvLvYnMWpBAqdk6nre767VAa8AjNkfl0IptEfQiY0F9xwPWXYtM7lLDvRtIrwQUm_CSVHzC-I-EvIQt4vrKPsD6tJ6jLlfJbPMMddMaXziuQN-MWqP_J7TIJjnSS6KzjlLNKlTUzIGoiYlPyT1W_AgYaABCTM_-6QFs0wSqkJIezcVf3whfVgNXkKYzajkbo92j7PdKpweEuoaC0mqOyXHDla19stdolb0OC8vcp3jKODiMzbnJOZej_2mgan4uNAXOBSUyBc3MW3i82bWY7-lMdzyQO5k9Mo0lTt0fH6yuATMvwzGChsq4_7nuuP2-us-lcCy-mI0O_p4YKbGhmXQdT1xWcsxtKxlggzq_gvzdvFYWGqnAdEsek8ymUbtCvWLgxIqlXr-ULpDW8KXyj_DmdpuGe6PYWUzTjo3qPnaevF37QD3m02ziLejifrbGWH78JKL0v7jMvnPv0Os5NSnEXqHRv1DstaRIa8g41psEUzdMemUPrkm10luW-dM6DEaQWEvXXrcNVdI4aLtc6ILLtfu3i6ewIRAepsb-SsxeDbAB7tcJo3zQ6mIM7ROSe0lBJhEtVWdTSft6OJIB7nobFRCAheqlbJ_OhMMu1xzAfG-oGIQnWc_SAgyiYGOJkTO-LGaVA-PMa3O7bMhN2ajE30jnmV0WGRYyx3PNqi3ji12PIVt-refZ66dcf9ntnU7Zjn9-4kM8Go8L_WiVFrwuucJcVvZ-7CL9n3L0fdMjKky5GTXo1pTrBBM5FK54CXcCla6pYTx7ktb8OU2XMIzqQVnRu8Bve3g4js88VWeFT7Kpr-MCG2wbFo49rm3jcTykpFW-N94Ag5hiHg84sKhAWlodz-OxwL8xRjx0ynlWJTNF-809KqDgkVA5OWkG4UEW0h_tAMg_v9nS2grRyRNrbXe2SiFHoJF4QrJWe-1eOnG1gvliCuJnH8BEx8D3QIVYSBeHiVDWYeFhAndO9Kz9yxPjqtwQ9m6iiK3MixyzgvFYZh5l49KRHFRP0_h1wWKVyHP9dtO0LEE3jguAahC29tEHg-Fc94NxNnbs4HAN-qWarRyq8Qil390AUn0HXQe0&opi=122715837
              - img [ref=f6e10]
            - link [ref=f6e12] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskWgiK6o6GkDcsUwztcljSJr91TBDxbCjYbyKlChtRvgfkXqORYHA122mOH16GxXdvl1eXhpmJkWU9EzRu3t76OQnBjviQCH_iNYwPFmnpUgXO14T5_TjUPKYAnyG34UX806Uqx7p64l4ylupoy3I9DetoZvfWJ-shFpUN50XWHvgFvFIPP4JxYfyGRoAkquhL5JDm8-bdWZwf5t9mCNS0I8FUcbVmj8l7lG6_ZS0k4hW6BydU1KPowwtO1nsKADp-0iM7y2-sUPH6pY0j1GES7ZONSCMspcfrWIhoI6MRSP1giN3N3iFRFFc0n3AQMeI_vnnXgBYOQ2GDZjcdtWDj_aTmG6U1S6dn9KtiPRQx0Fx41XU8i5gBmpc_wJz9YqAIjWnsyPAkiiwOBUfPP9oU6ahzi778BNMyGTh7dCN25o5zmcJ-libQ8ky79q2PPAldFakOY1rrtSqihBPELWUtAuhAAogCeYhp0eDjjTTbUKFFR_9bIl0AU_dEqUWHB6PQ5Scrbsz7A0pyip_Fr1n0wLS9A9bCgJ1LA-XDPbiGUWyMwVNYVdTUSd8Rnd4c2rE-QltVZXdvwbvBG5DFHp99nnbCeAHiPkXsbw6DNEdHAva7zxqYcVvcakR8ocl1nTORfihHo713tR5bVzLqz1tqtxcZLHXe2QoRAcrO5gVfciVaFJF86y1NO1R2eFt7tE0plz8noix2RIpzcKsA2rTBdLbD33HvT2u4E8rJny4GqI8SjdfTjP1dhDKc0UDYCXOU-KLXwXR5-WtZQKjd1TbcoOQowsKXM5k6PyDmTN1ZBL0Okc9rDTkvO1DK6SiV5ouO1yT9fbNmc4eLCo7LTRg_In6j0277UdOyaR4LGFXVO3IX6w8aomb9upfG2mvzkW6mu7Ta_nVprX4z0tweJ5DHDD3_8gznViZYvPRqsC9HhOneQ35-Rm81Ktlh63Hdd0dvXH-gejlbkXitgV4ZECm5jp2QGI8pSkOIE_uNrvIt4yfQX_abToFT8gsmmZHOUbiZdNKDeA0NXo65s-C_DZ-T55DtU8iPsPnNGEjKqJDzqFPlnPFLdksvqXObZ7nfymdMfb0KZxL9hKxDEbWyKtfFcyxOtKLcRlpH6HYbqA9vqctUg6wggC9xKjBaHckWe5mlqVFhCziqyoxZk3uLwgZuk_ECWBcj10AgaigEHZeoHqk5zdvA8hmSS2SKOepvKR_8EZmcZ1n3y-7ODW9yEfq7ZbcYLyKKVBFwv-SKmxV9WHdHRwW9M3u6QhfDpxK7KfUWCPkxj-lSV-JB4raZ7D9igKoHPOvYNBpQL-JFj53woWoUf1w7AcOP8g6B6nWrBiuCdOM9TocU7xl087g1gRplK59NAudl4mH7HD-ZwgHKqeyGpXMyODqf36-H5gFnAt3DMXInKlKcvn6tgbf2DAagH_CflvgTk8l0RfjDAz3KyNzp2FDe88I6HNZafsxe9FIZztiFqeB1PAIXIsmLo7JOK2EydKffUt7WXMciXGyZGChNNZZbighmEhMdMClYfV56rSaU8Yw7X62BnL7mpSjShfLhR-Ti1nZ2rN1iI3YNhp-_WWg3Gy-wb2ibvCFt-zGWDaAodGTjRJrZrVTnFRXmKypNRp59poKkAmZ-rYm7gF4om0m_dQ2NFnImh_GJM75OdfEQRonstPTLjEBscV5tPBYSUayLqSSB7-6-OhoZv13msRkn61JE0EXZPIISXdVqSCEItWRnwjL6bOiB8C4-P-9hvABbB8FHQSm6DO-KlxtB9_vAhHf11jbT_vLgKxtW1HRKvx2Li2ybsumn0qwbBKwycp1ZPdYNj1yRLIR6J7O-I01f2VjUoLynE-8FrnyZNoMUPeS7QyxkmJm5YL9ipTt6wkPwzoXhBFvfglQ-99S2kC_bYkaNiw9HpYKjt0Cyna6ozljHNvh4xDwP-kb2DqGpjs8oOab3rDtXWlBttWK4V4UBta_nHh1n-QPGAKdYK5iScq9ML6n1nvGVxLzg_u33b4RJeDTqtiA7T2-2N3qHrXEEUUPybEsPbAqKEgoS1X-RPWnGYhLqVbYvLvYnMWpBAqdk6nre767VAa8AjNkfl0IptEfQiY0F9xwPWXYtM7lLDvRtIrwQUm_CSVHzC-I-EvIQt4vrKPsD6tJ6jLlfJbPMMddMaXziuQN-MWqP_J7TIJjnSS6KzjlLNKlTUzIGoiYlPyT1W_AgYaABCTM_-6QFs0wSqkJIezcVf3whfVgNXkKYzajkbo92j7PdKpweEuoaC0mqOyXHDla19stdolb0OC8vcp3jKODiMzbnJOZej_2mgan4uNAXOBSUyBc3MW3i82bWY7-lMdzyQO5k9Mo0lTt0fH6yuATMvwzGChsq4_7nuuP2-us-lcCy-mI0O_p4YKbGhmXQdT1xWcsxtKxlggzq_gvzdvFYWGqnAdEsek8ymUbtCvWLgxIqlXr-ULpDW8KXyj_DmdpuGe6PYWUzTjo3qPnaevF37QD3m02ziLejifrbGWH78JKL0v7jMvnPv0Os5NSnEXqHRv1DstaRIa8g41psEUzdMemUPrkm10luW-dM6DEaQWEvXXrcNVdI4aLtc6ILLtfu3i6ewIRAepsb-SsxeDbAB7tcJo3zQ6mIM7ROSe0lBJhEtVWdTSft6OJIB7nobFRCAheqlbJ_OhMMu1xzAfG-oGIQnWc_SAgyiYGOJkTO-LGaVA-PMa3O7bMhN2ajE30jnmV0WGRYyx3PNqi3ji12PIVt-refZ66dcf9ntnU7Zjn9-4kM8Go8L_WiVFrwuucJcVvZ-7CL9n3L0fdMjKky5GTXo1pTrBBM5FK54CXcCla6pYTx7ktb8OU2XMIzqQVnRu8Bve3g4js88VWeFT7Kpr-MCG2wbFo49rm3jcTykpFW-N94Ag5hiHg84sKhAWlodz-OxwL8xRjx0ynlWJTNF-809KqDgkVA5OWkG4UEW0h_tAMg_v9nS2grRyRNrbXe2SiFHoJF4QrJWe-1eOnG1gvliCuJnH8BEx8D3QIVYSBeHiVDWYeFhAndO9Kz9yxPjqtwQ9m6iiK3MixyzgvFYZh5l49KRHFRP0_h1wWKVyHP9dtO0LEE3jguAahC29tEHg-Fc94NxNnbs4HAN-qWarRyq8Qil390AUn0HXQe0&opi=122715837
              - img [ref=f6e14]
          - img [ref=f6e17] [cursor=pointer]
          - generic [ref=f6e28]:
            - img [ref=f6e31]
            - generic [ref=f6e34]:
              - text: Ads by
              - img [ref=f6e35]
            - generic [ref=f6e38]:
              - generic [ref=f6e41] [cursor=pointer]: Ad options
              - generic [ref=f6e44] [cursor=pointer]: Send feedback
              - link [ref=f6e46] [cursor=pointer]:
                - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskWgiK6o6GkDcsUwztcljSJr91TBDxbCjYbyKlChtRvgfkXqORYHA122mOH16GxXdvl1eXhpmJkWU9EzRu3t76OQnBjviQCH_iNYwPFmnpUgXO14T5_TjUPKYAnyG34UX806Uqx7p64l4ylupoy3I9DetoZvfWJ-shFpUN50XWHvgFvFIPP4JxYfyGRoAkquhL5JDm8-bdWZwf5t9mCNS0I8FUcbVmj8l7lG6_ZS0k4hW6BydU1KPowwtO1nsKADp-0iM7y2-sUPH6pY0j1GES7ZONSCMspcfrWIhoI6MRSP1giN3N3iFRFFc0n3AQMeI_vnnXgBYOQ2GDZjcdtWDj_aTmG6U1S6dn9KtiPRQx0Fx41XU8i5gBmpc_wJz9YqAIjWnsyPAkiiwOBUfPP9oU6ahzi778BNMyGTh7dCN25o5zmcJ-libQ8ky79q2PPAldFakOY1rrtSqihBPELWUtAuhAAogCeYhp0eDjjTTbUKFFR_9bIl0AU_dEqUWHB6PQ5Scrbsz7A0pyip_Fr1n0wLS9A9bCgJ1LA-XDPbiGUWyMwVNYVdTUSd8Rnd4c2rE-QltVZXdvwbvBG5DFHp99nnbCeAHiPkXsbw6DNEdHAva7zxqYcVvcakR8ocl1nTORfihHo713tR5bVzLqz1tqtxcZLHXe2QoRAcrO5gVfciVaFJF86y1NO1R2eFt7tE0plz8noix2RIpzcKsA2rTBdLbD33HvT2u4E8rJny4GqI8SjdfTjP1dhDKc0UDYCXOU-KLXwXR5-WtZQKjd1TbcoOQowsKXM5k6PyDmTN1ZBL0Okc9rDTkvO1DK6SiV5ouO1yT9fbNmc4eLCo7LTRg_In6j0277UdOyaR4LGFXVO3IX6w8aomb9upfG2mvzkW6mu7Ta_nVprX4z0tweJ5DHDD3_8gznViZYvPRqsC9HhOneQ35-Rm81Ktlh63Hdd0dvXH-gejlbkXitgV4ZECm5jp2QGI8pSkOIE_uNrvIt4yfQX_abToFT8gsmmZHOUbiZdNKDeA0NXo65s-C_DZ-T55DtU8iPsPnNGEjKqJDzqFPlnPFLdksvqXObZ7nfymdMfb0KZxL9hKxDEbWyKtfFcyxOtKLcRlpH6HYbqA9vqctUg6wggC9xKjBaHckWe5mlqVFhCziqyoxZk3uLwgZuk_ECWBcj10AgaigEHZeoHqk5zdvA8hmSS2SKOepvKR_8EZmcZ1n3y-7ODW9yEfq7ZbcYLyKKVBFwv-SKmxV9WHdHRwW9M3u6QhfDpxK7KfUWCPkxj-lSV-JB4raZ7D9igKoHPOvYNBpQL-JFj53woWoUf1w7AcOP8g6B6nWrBiuCdOM9TocU7xl087g1gRplK59NAudl4mH7HD-ZwgHKqeyGpXMyODqf36-H5gFnAt3DMXInKlKcvn6tgbf2DAagH_CflvgTk8l0RfjDAz3KyNzp2FDe88I6HNZafsxe9FIZztiFqeB1PAIXIsmLo7JOK2EydKffUt7WXMciXGyZGChNNZZbighmEhMdMClYfV56rSaU8Yw7X62BnL7mpSjShfLhR-Ti1nZ2rN1iI3YNhp-_WWg3Gy-wb2ibvCFt-zGWDaAodGTjRJrZrVTnFRXmKypNRp59poKkAmZ-rYm7gF4om0m_dQ2NFnImh_GJM75OdfEQRonstPTLjEBscV5tPBYSUayLqSSB7-6-OhoZv13msRkn61JE0EXZPIISXdVqSCEItWRnwjL6bOiB8C4-P-9hvABbB8FHQSm6DO-KlxtB9_vAhHf11jbT_vLgKxtW1HRKvx2Li2ybsumn0qwbBKwycp1ZPdYNj1yRLIR6J7O-I01f2VjUoLynE-8FrnyZNoMUPeS7QyxkmJm5YL9ipTt6wkPwzoXhBFvfglQ-99S2kC_bYkaNiw9HpYKjt0Cyna6ozljHNvh4xDwP-kb2DqGpjs8oOab3rDtXWlBttWK4V4UBta_nHh1n-QPGAKdYK5iScq9ML6n1nvGVxLzg_u33b4RJeDTqtiA7T2-2N3qHrXEEUUPybEsPbAqKEgoS1X-RPWnGYhLqVbYvLvYnMWpBAqdk6nre767VAa8AjNkfl0IptEfQiY0F9xwPWXYtM7lLDvRtIrwQUm_CSVHzC-I-EvIQt4vrKPsD6tJ6jLlfJbPMMddMaXziuQN-MWqP_J7TIJjnSS6KzjlLNKlTUzIGoiYlPyT1W_AgYaABCTM_-6QFs0wSqkJIezcVf3whfVgNXkKYzajkbo92j7PdKpweEuoaC0mqOyXHDla19stdolb0OC8vcp3jKODiMzbnJOZej_2mgan4uNAXOBSUyBc3MW3i82bWY7-lMdzyQO5k9Mo0lTt0fH6yuATMvwzGChsq4_7nuuP2-us-lcCy-mI0O_p4YKbGhmXQdT1xWcsxtKxlggzq_gvzdvFYWGqnAdEsek8ymUbtCvWLgxIqlXr-ULpDW8KXyj_DmdpuGe6PYWUzTjo3qPnaevF37QD3m02ziLejifrbGWH78JKL0v7jMvnPv0Os5NSnEXqHRv1DstaRIa8g41psEUzdMemUPrkm10luW-dM6DEaQWEvXXrcNVdI4aLtc6ILLtfu3i6ewIRAepsb-SsxeDbAB7tcJo3zQ6mIM7ROSe0lBJhEtVWdTSft6OJIB7nobFRCAheqlbJ_OhMMu1xzAfG-oGIQnWc_SAgyiYGOJkTO-LGaVA-PMa3O7bMhN2ajE30jnmV0WGRYyx3PNqi3ji12PIVt-refZ66dcf9ntnU7Zjn9-4kM8Go8L_WiVFrwuucJcVvZ-7CL9n3L0fdMjKky5GTXo1pTrBBM5FK54CXcCla6pYTx7ktb8OU2XMIzqQVnRu8Bve3g4js88VWeFT7Kpr-MCG2wbFo49rm3jcTykpFW-N94Ag5hiHg84sKhAWlodz-OxwL8xRjx0ynlWJTNF-809KqDgkVA5OWkG4UEW0h_tAMg_v9nS2grRyRNrbXe2SiFHoJF4QrJWe-1eOnG1gvliCuJnH8BEx8D3QIVYSBeHiVDWYeFhAndO9Kz9yxPjqtwQ9m6iiK3MixyzgvFYZh5l49KRHFRP0_h1wWKVyHP9dtO0LEE3jguAahC29tEHg-Fc94NxNnbs4HAN-qWarRyq8Qil390AUn0HXQe0&opi=122715837
                - generic [ref=f6e47]:
                  - text: Why this ad?
                  - img [ref=f6e48]
          - generic [ref=f6e50]:
            - generic [ref=f6e53] [cursor=pointer]: Not interested in this ad
            - generic [ref=f6e56] [cursor=pointer]: Seen this ad multiple times
            - generic [ref=f6e59] [cursor=pointer]: Ad was inappropriate
            - generic [ref=f6e62] [cursor=pointer]: Ad covered content
          - generic [ref=f6e68]: Thanks. Feedback improves Google ads
          - generic [ref=f6e74]:
            - text: Ad closed by
            - img [ref=f6e75]
          - generic [ref=f6e82]:
            - img [ref=f6e85]
            - generic [ref=f6e87]:
              - generic [ref=f6e89]: Personalize ads on this site
              - link [ref=f6e93] [cursor=pointer]:
                - /url: https://support.google.com/ads/answer/10923348
                - generic [ref=f6e94]:
                  - text: Learn more
                  - img [ref=f6e95]
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