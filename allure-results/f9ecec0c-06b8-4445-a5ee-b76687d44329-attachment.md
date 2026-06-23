# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBoxTest.spec.ts >> Check Box Test >> TC01-Click Expand All button
- Location: tests\CheckBoxTest.spec.ts:9:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[title=\'Expand all\']')

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
        - generic [active]:
          - generic [ref=f7e1]:
            - link [ref=f7e3] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskUU_k2oRbMotdSWgXdHKKwedEkkhx8_V9eW0f-eOCaJr57XlCvqd-8PkKLkwhXOcPl0pP7BA3FxuqMiBs9VSmL9BCpmQkTDvB80y2SASGnsv8VAbLAjGLB1m4_JTTyd_0JUzo3ZVq-YsxquivOiTY4hJAsJb3vJ8qPrFuSnBHAyfMhhdPn7KhgrD5WqpYhiXymrF28Nj3Z_X3YEtYrODEoMmiH4Jgf_MVsVkyw8KiYxjutL2uKr6CyIhO57q_Rs5lqAaPo_dgboeKsOBCa_jFGg0hsIYH6DrC8xC2QUtGst_7qrX_h9Oe93H4_nOhUWHRRb-pJUZi78eSBESPvw6I2bYlmpCCcXQuOxv-EtLGIrxWnqNHA_mRMi9TXKzPPihaItlgHr-31TkCSsSS4nLZrgai5VbaJHRikHFuyGwCeBJTRLqOyHVhK9Hz01dQvErx82y0mQqczE_hWNZzoK_tcVhA0qdwIOkQFEfsr--LoVLpnApQiY29KaWROfradTSHPs8-SG6XH8g9puF_56Odv5t7iwO6KEh3XFZUHRpJB0LXhASdor8gcHNEb0SMlkZCD_MzU0507YaeuZwCaFIk_wn729-tJTm1DCmkpWlZjKUVmwPmXUC5cMPbssM_Gl6p5SK6Kz_XPPIf6Fiub9VMMg4PEGcFnywZHN9_hlJB70UmJm7IotxqXcILwTmMFbxUqv0SBlhdLGS78xwvTSjndOd0KCCo54yvxVAFQ7aSSZQgquFt85zZ1ybf_oCUoeBXE17RGONoeqSpp4Ww23yjgqNf5G8VLFJVx4-VcxqARZfu8rBbgML5JRHw_FqnUvZs5xCSBYyaqTH_Ri9jkPWD7jQdBErJrnOnH12JkJtgE9ehLDfOvzzhENhzv6yIZfF0NhlLn5LOJRo4V5W2LDoNa2_gmRxqXYxtJ9qbH2DrVYT7T6r7mUnJb5Kx-Q8k1ya3E7qgWj7a87ZidZT64biKzVK8lzXRJBjA092k9ErgddU7MXBseDspgz0DYBgwAiYLHN2onQThY_dGwC-ZJGs-pkgpcHqXlhhKJlWPZ4CwNP9y4B6So1sNptAO8DOYlBfiFYK62XfGjxlMLTlxGhB5UlgSLToMSmHrSE-KaAZU2AhuseB7vOk-KmwZ_gUEk7S4lS61Xf_JgTew_Vbuu6XKhEmF78qEKCRKC9WAr69PWmKE0ytpfnPk-cagLAiqwx-4OhgDeWEDfgD6BscwGF303AFcUwTg-ndsTt2sRZYYnRrglq_y0I0DNh3IxIwjo4UAZN4ILctHCcBRiYRJIZd176tgBHfNxqaoGF3HHpxb1_CgqjZW13kJUXqnDBQXVT72FB1jW_SmwUrLfw-7yUf9wRLppA9K7_mrJrHdjxVBl4Ugf-BuLMU4Y9BK3kHCif2tTi_OEjrNfOidgPaxUBjeVj4QI4vAbF3pgNMmCUakcdB8PgVbdxzdXdXSnYj3ljkkoYiWXeteH3SkOuCwaCmqcJ9J1JRfZoHIR5yN6JmZYs0Z24y643LAOdTvaNreNdHoHlUC3zzCnopln599AxQOl5yUEKxQk5gRG5IqrCAPDo-_MtUSj39OCPFfXQbKnWNd6sX9JeIrw4OnzCn1Ex7doLDb6ZCyjyMk07mU0Hfxi-3KCtRanSiO0j2t5IlTBEDYZe6xMoIfMkCNyseKGZm_Xev2LT4eqm1_Yes6dbM_lkfdNtft0GzZyvovXgYZz3IpU4wxxgb-BKM7TubltIcVkNWtan_jNbyAmazP2_TiY_luPa9Pj2h6lS_LR1cx7-I4709CQXLoNc6wEYWj5ez-wA3nit7G8TyjO5CrRJ63YEWX1VYA8mqIBqbfi2hkc7C214bt05Xl-t_V7JYz_jR3v4nknWWK-Env6ijLLwjmNma9pTey2FRLRVfrMoBk_3Wo2n7YXzTG96Fi8G1SkpvBkvU0QN4dewq_kJFjoewjwOiqx3kHJfJ4J5-xzDG3amPC3kZylUui-auK9XTjRP3KSPTIaAwFRlRGda6xMESzBSOyMiBk7lSzQ9XR1rqPOcCJ9js4YqIAq0xr9yoZ02nfM2Sd_sJl8-U6h8OTqP2e5ripOD-73WR0Cz5pfnXk5DHz6UXTwyKONDcjidIAVLJKlaCKWiFzbUtHRnLObDS_BQgVipw8ahxE-FEHBDL7r0qXt1bXWrXmNMLhqAQYH2QcTMG_ScmI9D6_G6SEjIa2lEafrqolKXP6hsmyUR2S53h0oXPxspNl9Ncq86Rnw34OxILKQZYNocHeo-da6XGg9hes3qN2wn6fXGurCkdnvm5hdy2z2_uMwzyZflOqY8hEu4Az__L3wb4FaXCrrRZDM7ZEJxzr8BXovzQKbrSrv1X8d_a1tkZL-tp22wXt3uDqAlTpPosCjLgeDwTpi7givfJR5-0MwtkvrN8hMAmZAHFuZOE5Z9uVIoClOVlH4NA1NhYA_SiwxyB4RQ--Y9KYGYmvhyiEpqUcmNuaNGEYVgyNCAITuvB4V7TfRlT5cDK1A-DK44FJ3DbWwurzokucmj_8G0GB4DgCNp2F0ZwXfODxyLc3INbbBh8c7p0Ar7oIWB1Bja3paQxMsM1IuW9wvWR-1YFtufWbcXa0BUaqIfqwED4OJy72c8wbuLfjhpkobMxTiFZlGTb6s7y8L3bqpYjynjpc3FG4FPeOl-3U80tEeVMMNdNZPZw2SA1HySUSu_69ydY16L3PDXw5V0Ecd_X5ihaNgJ0MWQEbIpUbuz8F8gVs_iialOTGIGTntS9Eexgyk9LOWboa-uW3VIh-ZRIBPt4tzJMKLo0sm1t011g6dxsJfqHW3W0POMJiNEk5RRbw3yPV6rzfMjfle43v_PHDec9__TrU64Ud4qCutK7B4U2TorlUhvGC70RSArfINgt9LpmZluIl6MNlzbgWoBSrdzeAAAWUYUwwYrGfTcr0LilPwxfHJQgYOgGhXsZu3Y9bDVXHS03191MbGolJkAlYhhJra7XNSRqyBkVbAhQ8wGnIN5ji_yaF4Ev5Us6hsK6t8NM8gGYkdMqTDonpL216ksH98drjL_7MNNeR4mArHrX7wS6ZvYUzJqrkV4QTUOV9yH6AFYXXNKnxI3dcuHQUuC6dolqugrw4riA4nFnW3Rz_YCffybKWY1&opi=122715837
              - img [ref=f7e5]
            - link [ref=f7e7] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskUU_k2oRbMotdSWgXdHKKwedEkkhx8_V9eW0f-eOCaJr57XlCvqd-8PkKLkwhXOcPl0pP7BA3FxuqMiBs9VSmL9BCpmQkTDvB80y2SASGnsv8VAbLAjGLB1m4_JTTyd_0JUzo3ZVq-YsxquivOiTY4hJAsJb3vJ8qPrFuSnBHAyfMhhdPn7KhgrD5WqpYhiXymrF28Nj3Z_X3YEtYrODEoMmiH4Jgf_MVsVkyw8KiYxjutL2uKr6CyIhO57q_Rs5lqAaPo_dgboeKsOBCa_jFGg0hsIYH6DrC8xC2QUtGst_7qrX_h9Oe93H4_nOhUWHRRb-pJUZi78eSBESPvw6I2bYlmpCCcXQuOxv-EtLGIrxWnqNHA_mRMi9TXKzPPihaItlgHr-31TkCSsSS4nLZrgai5VbaJHRikHFuyGwCeBJTRLqOyHVhK9Hz01dQvErx82y0mQqczE_hWNZzoK_tcVhA0qdwIOkQFEfsr--LoVLpnApQiY29KaWROfradTSHPs8-SG6XH8g9puF_56Odv5t7iwO6KEh3XFZUHRpJB0LXhASdor8gcHNEb0SMlkZCD_MzU0507YaeuZwCaFIk_wn729-tJTm1DCmkpWlZjKUVmwPmXUC5cMPbssM_Gl6p5SK6Kz_XPPIf6Fiub9VMMg4PEGcFnywZHN9_hlJB70UmJm7IotxqXcILwTmMFbxUqv0SBlhdLGS78xwvTSjndOd0KCCo54yvxVAFQ7aSSZQgquFt85zZ1ybf_oCUoeBXE17RGONoeqSpp4Ww23yjgqNf5G8VLFJVx4-VcxqARZfu8rBbgML5JRHw_FqnUvZs5xCSBYyaqTH_Ri9jkPWD7jQdBErJrnOnH12JkJtgE9ehLDfOvzzhENhzv6yIZfF0NhlLn5LOJRo4V5W2LDoNa2_gmRxqXYxtJ9qbH2DrVYT7T6r7mUnJb5Kx-Q8k1ya3E7qgWj7a87ZidZT64biKzVK8lzXRJBjA092k9ErgddU7MXBseDspgz0DYBgwAiYLHN2onQThY_dGwC-ZJGs-pkgpcHqXlhhKJlWPZ4CwNP9y4B6So1sNptAO8DOYlBfiFYK62XfGjxlMLTlxGhB5UlgSLToMSmHrSE-KaAZU2AhuseB7vOk-KmwZ_gUEk7S4lS61Xf_JgTew_Vbuu6XKhEmF78qEKCRKC9WAr69PWmKE0ytpfnPk-cagLAiqwx-4OhgDeWEDfgD6BscwGF303AFcUwTg-ndsTt2sRZYYnRrglq_y0I0DNh3IxIwjo4UAZN4ILctHCcBRiYRJIZd176tgBHfNxqaoGF3HHpxb1_CgqjZW13kJUXqnDBQXVT72FB1jW_SmwUrLfw-7yUf9wRLppA9K7_mrJrHdjxVBl4Ugf-BuLMU4Y9BK3kHCif2tTi_OEjrNfOidgPaxUBjeVj4QI4vAbF3pgNMmCUakcdB8PgVbdxzdXdXSnYj3ljkkoYiWXeteH3SkOuCwaCmqcJ9J1JRfZoHIR5yN6JmZYs0Z24y643LAOdTvaNreNdHoHlUC3zzCnopln599AxQOl5yUEKxQk5gRG5IqrCAPDo-_MtUSj39OCPFfXQbKnWNd6sX9JeIrw4OnzCn1Ex7doLDb6ZCyjyMk07mU0Hfxi-3KCtRanSiO0j2t5IlTBEDYZe6xMoIfMkCNyseKGZm_Xev2LT4eqm1_Yes6dbM_lkfdNtft0GzZyvovXgYZz3IpU4wxxgb-BKM7TubltIcVkNWtan_jNbyAmazP2_TiY_luPa9Pj2h6lS_LR1cx7-I4709CQXLoNc6wEYWj5ez-wA3nit7G8TyjO5CrRJ63YEWX1VYA8mqIBqbfi2hkc7C214bt05Xl-t_V7JYz_jR3v4nknWWK-Env6ijLLwjmNma9pTey2FRLRVfrMoBk_3Wo2n7YXzTG96Fi8G1SkpvBkvU0QN4dewq_kJFjoewjwOiqx3kHJfJ4J5-xzDG3amPC3kZylUui-auK9XTjRP3KSPTIaAwFRlRGda6xMESzBSOyMiBk7lSzQ9XR1rqPOcCJ9js4YqIAq0xr9yoZ02nfM2Sd_sJl8-U6h8OTqP2e5ripOD-73WR0Cz5pfnXk5DHz6UXTwyKONDcjidIAVLJKlaCKWiFzbUtHRnLObDS_BQgVipw8ahxE-FEHBDL7r0qXt1bXWrXmNMLhqAQYH2QcTMG_ScmI9D6_G6SEjIa2lEafrqolKXP6hsmyUR2S53h0oXPxspNl9Ncq86Rnw34OxILKQZYNocHeo-da6XGg9hes3qN2wn6fXGurCkdnvm5hdy2z2_uMwzyZflOqY8hEu4Az__L3wb4FaXCrrRZDM7ZEJxzr8BXovzQKbrSrv1X8d_a1tkZL-tp22wXt3uDqAlTpPosCjLgeDwTpi7givfJR5-0MwtkvrN8hMAmZAHFuZOE5Z9uVIoClOVlH4NA1NhYA_SiwxyB4RQ--Y9KYGYmvhyiEpqUcmNuaNGEYVgyNCAITuvB4V7TfRlT5cDK1A-DK44FJ3DbWwurzokucmj_8G0GB4DgCNp2F0ZwXfODxyLc3INbbBh8c7p0Ar7oIWB1Bja3paQxMsM1IuW9wvWR-1YFtufWbcXa0BUaqIfqwED4OJy72c8wbuLfjhpkobMxTiFZlGTb6s7y8L3bqpYjynjpc3FG4FPeOl-3U80tEeVMMNdNZPZw2SA1HySUSu_69ydY16L3PDXw5V0Ecd_X5ihaNgJ0MWQEbIpUbuz8F8gVs_iialOTGIGTntS9Eexgyk9LOWboa-uW3VIh-ZRIBPt4tzJMKLo0sm1t011g6dxsJfqHW3W0POMJiNEk5RRbw3yPV6rzfMjfle43v_PHDec9__TrU64Ud4qCutK7B4U2TorlUhvGC70RSArfINgt9LpmZluIl6MNlzbgWoBSrdzeAAAWUYUwwYrGfTcr0LilPwxfHJQgYOgGhXsZu3Y9bDVXHS03191MbGolJkAlYhhJra7XNSRqyBkVbAhQ8wGnIN5ji_yaF4Ev5Us6hsK6t8NM8gGYkdMqTDonpL216ksH98drjL_7MNNeR4mArHrX7wS6ZvYUzJqrkV4QTUOV9yH6AFYXXNKnxI3dcuHQUuC6dolqugrw4riA4nFnW3Rz_YCffybKWY1&opi=122715837
              - img [ref=f7e9]
          - img [ref=f7e12] [cursor=pointer]
          - generic [ref=f7e23]:
            - img [ref=f7e26]
            - generic [ref=f7e29]:
              - text: Ads by
              - img [ref=f7e30]
            - generic [ref=f7e33]:
              - generic [ref=f7e36] [cursor=pointer]: Ad options
              - generic [ref=f7e39] [cursor=pointer]: Send feedback
              - link [ref=f7e41] [cursor=pointer]:
                - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskUU_k2oRbMotdSWgXdHKKwedEkkhx8_V9eW0f-eOCaJr57XlCvqd-8PkKLkwhXOcPl0pP7BA3FxuqMiBs9VSmL9BCpmQkTDvB80y2SASGnsv8VAbLAjGLB1m4_JTTyd_0JUzo3ZVq-YsxquivOiTY4hJAsJb3vJ8qPrFuSnBHAyfMhhdPn7KhgrD5WqpYhiXymrF28Nj3Z_X3YEtYrODEoMmiH4Jgf_MVsVkyw8KiYxjutL2uKr6CyIhO57q_Rs5lqAaPo_dgboeKsOBCa_jFGg0hsIYH6DrC8xC2QUtGst_7qrX_h9Oe93H4_nOhUWHRRb-pJUZi78eSBESPvw6I2bYlmpCCcXQuOxv-EtLGIrxWnqNHA_mRMi9TXKzPPihaItlgHr-31TkCSsSS4nLZrgai5VbaJHRikHFuyGwCeBJTRLqOyHVhK9Hz01dQvErx82y0mQqczE_hWNZzoK_tcVhA0qdwIOkQFEfsr--LoVLpnApQiY29KaWROfradTSHPs8-SG6XH8g9puF_56Odv5t7iwO6KEh3XFZUHRpJB0LXhASdor8gcHNEb0SMlkZCD_MzU0507YaeuZwCaFIk_wn729-tJTm1DCmkpWlZjKUVmwPmXUC5cMPbssM_Gl6p5SK6Kz_XPPIf6Fiub9VMMg4PEGcFnywZHN9_hlJB70UmJm7IotxqXcILwTmMFbxUqv0SBlhdLGS78xwvTSjndOd0KCCo54yvxVAFQ7aSSZQgquFt85zZ1ybf_oCUoeBXE17RGONoeqSpp4Ww23yjgqNf5G8VLFJVx4-VcxqARZfu8rBbgML5JRHw_FqnUvZs5xCSBYyaqTH_Ri9jkPWD7jQdBErJrnOnH12JkJtgE9ehLDfOvzzhENhzv6yIZfF0NhlLn5LOJRo4V5W2LDoNa2_gmRxqXYxtJ9qbH2DrVYT7T6r7mUnJb5Kx-Q8k1ya3E7qgWj7a87ZidZT64biKzVK8lzXRJBjA092k9ErgddU7MXBseDspgz0DYBgwAiYLHN2onQThY_dGwC-ZJGs-pkgpcHqXlhhKJlWPZ4CwNP9y4B6So1sNptAO8DOYlBfiFYK62XfGjxlMLTlxGhB5UlgSLToMSmHrSE-KaAZU2AhuseB7vOk-KmwZ_gUEk7S4lS61Xf_JgTew_Vbuu6XKhEmF78qEKCRKC9WAr69PWmKE0ytpfnPk-cagLAiqwx-4OhgDeWEDfgD6BscwGF303AFcUwTg-ndsTt2sRZYYnRrglq_y0I0DNh3IxIwjo4UAZN4ILctHCcBRiYRJIZd176tgBHfNxqaoGF3HHpxb1_CgqjZW13kJUXqnDBQXVT72FB1jW_SmwUrLfw-7yUf9wRLppA9K7_mrJrHdjxVBl4Ugf-BuLMU4Y9BK3kHCif2tTi_OEjrNfOidgPaxUBjeVj4QI4vAbF3pgNMmCUakcdB8PgVbdxzdXdXSnYj3ljkkoYiWXeteH3SkOuCwaCmqcJ9J1JRfZoHIR5yN6JmZYs0Z24y643LAOdTvaNreNdHoHlUC3zzCnopln599AxQOl5yUEKxQk5gRG5IqrCAPDo-_MtUSj39OCPFfXQbKnWNd6sX9JeIrw4OnzCn1Ex7doLDb6ZCyjyMk07mU0Hfxi-3KCtRanSiO0j2t5IlTBEDYZe6xMoIfMkCNyseKGZm_Xev2LT4eqm1_Yes6dbM_lkfdNtft0GzZyvovXgYZz3IpU4wxxgb-BKM7TubltIcVkNWtan_jNbyAmazP2_TiY_luPa9Pj2h6lS_LR1cx7-I4709CQXLoNc6wEYWj5ez-wA3nit7G8TyjO5CrRJ63YEWX1VYA8mqIBqbfi2hkc7C214bt05Xl-t_V7JYz_jR3v4nknWWK-Env6ijLLwjmNma9pTey2FRLRVfrMoBk_3Wo2n7YXzTG96Fi8G1SkpvBkvU0QN4dewq_kJFjoewjwOiqx3kHJfJ4J5-xzDG3amPC3kZylUui-auK9XTjRP3KSPTIaAwFRlRGda6xMESzBSOyMiBk7lSzQ9XR1rqPOcCJ9js4YqIAq0xr9yoZ02nfM2Sd_sJl8-U6h8OTqP2e5ripOD-73WR0Cz5pfnXk5DHz6UXTwyKONDcjidIAVLJKlaCKWiFzbUtHRnLObDS_BQgVipw8ahxE-FEHBDL7r0qXt1bXWrXmNMLhqAQYH2QcTMG_ScmI9D6_G6SEjIa2lEafrqolKXP6hsmyUR2S53h0oXPxspNl9Ncq86Rnw34OxILKQZYNocHeo-da6XGg9hes3qN2wn6fXGurCkdnvm5hdy2z2_uMwzyZflOqY8hEu4Az__L3wb4FaXCrrRZDM7ZEJxzr8BXovzQKbrSrv1X8d_a1tkZL-tp22wXt3uDqAlTpPosCjLgeDwTpi7givfJR5-0MwtkvrN8hMAmZAHFuZOE5Z9uVIoClOVlH4NA1NhYA_SiwxyB4RQ--Y9KYGYmvhyiEpqUcmNuaNGEYVgyNCAITuvB4V7TfRlT5cDK1A-DK44FJ3DbWwurzokucmj_8G0GB4DgCNp2F0ZwXfODxyLc3INbbBh8c7p0Ar7oIWB1Bja3paQxMsM1IuW9wvWR-1YFtufWbcXa0BUaqIfqwED4OJy72c8wbuLfjhpkobMxTiFZlGTb6s7y8L3bqpYjynjpc3FG4FPeOl-3U80tEeVMMNdNZPZw2SA1HySUSu_69ydY16L3PDXw5V0Ecd_X5ihaNgJ0MWQEbIpUbuz8F8gVs_iialOTGIGTntS9Eexgyk9LOWboa-uW3VIh-ZRIBPt4tzJMKLo0sm1t011g6dxsJfqHW3W0POMJiNEk5RRbw3yPV6rzfMjfle43v_PHDec9__TrU64Ud4qCutK7B4U2TorlUhvGC70RSArfINgt9LpmZluIl6MNlzbgWoBSrdzeAAAWUYUwwYrGfTcr0LilPwxfHJQgYOgGhXsZu3Y9bDVXHS03191MbGolJkAlYhhJra7XNSRqyBkVbAhQ8wGnIN5ji_yaF4Ev5Us6hsK6t8NM8gGYkdMqTDonpL216ksH98drjL_7MNNeR4mArHrX7wS6ZvYUzJqrkV4QTUOV9yH6AFYXXNKnxI3dcuHQUuC6dolqugrw4riA4nFnW3Rz_YCffybKWY1&opi=122715837
                - generic [ref=f7e42]:
                  - text: Why this ad?
                  - img [ref=f7e43]
          - generic [ref=f7e45]:
            - generic [ref=f7e48] [cursor=pointer]: Not interested in this ad
            - generic [ref=f7e51] [cursor=pointer]: Ad was inappropriate
            - generic [ref=f7e54] [cursor=pointer]: Seen this ad multiple times
            - generic [ref=f7e57] [cursor=pointer]: Ad covered content
          - generic [ref=f7e63]: Thanks. Feedback improves Google ads
          - generic [ref=f7e69]:
            - text: Ad closed by
            - img [ref=f7e70]
          - generic [ref=f7e77]:
            - img [ref=f7e80]
            - generic [ref=f7e82]:
              - generic [ref=f7e84]: Personalize ads on this site
              - link [ref=f7e88] [cursor=pointer]:
                - /url: https://support.google.com/ads/answer/10923348
                - generic [ref=f7e89]:
                  - text: Learn more
                  - img [ref=f7e90]
          - link [ref=f7e94]:
            - generic [ref=f7e100]:
              - img [ref=f7e102]
              - img [ref=f7e104]
              - img [ref=f7e106]
              - img [ref=f7e108]
              - img [ref=f7e110]
              - img [ref=f7e112]
              - img [ref=f7e114]
              - img [ref=f7e117]
              - img [ref=f7e120]
              - generic [ref=f7e121]:
                - img [ref=f7e123]
                - img [ref=f7e125]
                - img [ref=f7e127]
                - img [ref=f7e129]
              - generic [ref=f7e130]:
                - img [ref=f7e132]
                - img [ref=f7e134]
                - img [ref=f7e136]
                - img [ref=f7e138]
              - generic [ref=f7e139]:
                - img [ref=f7e141]
                - img [ref=f7e143]
                - img [ref=f7e145]
                - img [ref=f7e147]
              - img [ref=f7e150]
              - img [ref=f7e153]
              - img [ref=f7e155]
              - img [ref=f7e157]
              - img [ref=f7e159]
              - img [ref=f7e161]
              - img [ref=f7e163]
    - iframe [ref=e149]:
      - generic [ref=f8e3]:
        - link [ref=f8e4] [cursor=pointer]:
          - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Cua0hQj0sauOLGtzk29gP-7bJ2QyZmdjKhwHZwOf-gxba2R4QASDG-9Z5YMGt-g2gAay9ys9ByAECqQIiawtcL-TEPeACAKgDAcgDCKoEjAJP0O-ZjHgoL5C6m6HKD6t3NxV6VcyFY0Ukh97yOVUtsYMw1IcEjYd42y69cEjRZhKTksfWpZMU-nTXtSSXSAU1Cnfa_tXVXNtmcu2JEYGIu0NPDjpVKAsuVWGCwUuwbTaqd-dtaloI_6EhrLDEYnUzgNt1JAWp3QQrFKds7vw5istJV3CyFgKGJaLdCGbn7NDT-N2hLprQxOKMMIh7BSRCRUedVDpSnRjflsjK89oxgqenGM0_saZAnG5aUwD4X2C1pipNijrDJe_Lol7-Af_wTvXHTI6aMrJcp6PpqJe-Ks8WDLhBCGu8LG4_6I9zbmZdXzRa2opuwcKuRsXrFXHlK4UXiaELOXPFPj2pwAS_z57_2gXgBAGIBYKpkP5YoAYCgAes9ZqvHKgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMgiAYRABGB0yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliRteHNmIKVA2AB8ggbYWR4LXN1YnN5bi0zNTIwNjE3MzQxNjY1NTkysQlP1zZDJ3s6eoAKA5gLAcgLAaIMDyoKCgiO37ECleKxApABAaoNAlZOyA0B4g0TCL_i4c2YgpUDFVzyFgUde1syy-oNEwiUr-LNmIKVAxVc8hYFHXtbMsvwDQKIDv___________wHYEwrQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo2MTY4NTc2NTA1UAa6FwI4AaoYFwkAAAAAYNnzQBIKNjE2ODU3NjUwNRgBshgJEgLXahgCIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI47T7zZiClQMVXPIWBR17WzLLEAEYASAAEgLnaPD_BwE&num=1&cid=CAQSoAIAEQoqgcHlWpdj0nJkL0WEcTb_PjiLiiPbxnPPRSF1Izy_CsWkN60imYaTzPYLS-_HflRlvIYE8ia5KjK8O69cR_GyLgYm_nhho5h-kJ_MlQlkwQgPxkzg3rJNtFpEh-qyoZCUdyF3D8PKy4B5eZTnW3lHkANUefkrNp9-bcRJmJUpgQ1ZgryQ9f2OHYnR3HQaWHSYo-2p5ij6H5U-4CnpHws5ehN5EroMslXSRVMYdYu0P9M5RSRJI7ibcAuuBxuYVmGzTVD1B_GQYkl8YjqBG7GpnxzuvNBBU6xgi4p0tPlRESEr2iAf74ngvl1wPX2mRzJObmt1__S8OOb79WJpCJmdOSbCPDatA3fUkHBmjdHmtB63MaSweVPfweX_efwYAQ&sig=AOD64_1GzmDyJlTdPdDxpmTuiRxMShKyKQ&client=ca-pub-4573231550355221&rf=5&nx=CLICK_X&ny=CLICK_Y&uap=UACH(platform)&uapv=UACH(platformVersion)&uaa=UACH(architecture)&uam=UACH(model)&uafv=UACH(uaFullVersion)&uab=UACH(bitness)&uaw=UACH(wow64)&uafvl=UACH(fullVersionList)&nb=2&adurl=https://shopee.vn/universal-link/romano_vietnam%3Fdeep_and_web%3D1%26is_seller%3Dtrue%26utm_campaign%3Ds140586149_ss_vn_gsem_rofwsvq126%26utm_medium%3Dseller%26utm_source%3Dgoogle%26utm_content%3Dgoogle%26smtt%3D9%26gad_source%3D5%26gad_campaignid%3D23886828674%26gclid%3DEAIaIQobChMI47T7zZiClQMVXPIWBR17WzLLEAEYASAAEgLnaPD_BwE
        - generic [ref=f8e6]:
          - link [ref=f8e8] [cursor=pointer]:
            - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskU33E0g4vx5JR--CLqboJt0yG7tq4NB_A2gUGR3V0KvKNaomPLo_6a-Yi3kSMyT9UxuariIOzno0NEt-lL3zrSZxeYaaRjmvrz_ozwKyNmfgNmRQ6mXCHZMsJ7T7GDeT4l4M_jCU8E9IeLRiHuCYkNaG3rNMeOtlVMS-nhqi1WSW0031TkCHyS1RFSkFovm1JW33F-2tGzw3TskCrqrFmrOI_iKQfbNKKrSXfjXwl2Br5cz7hLy2hSpFZSfSkxKy8XNCVMl_epMXFY48-6zbHfpSV5cyCvtw0-5WjO90ze7mk3789VSTL-1La4RWzjcOM1ZDYHTt88j1lbM7rcpNY8HA0Ky9iaD-MTSGOH9NKE99mSZnTL4efQdeEVWt558CywpMA4hBub2U1bdSsUjzJEtq1ux5GA2km0MhWaK2s_1RQ177ds-n-62KUer9GBY57JbWSipxzWwosG8R-Jj9RNJgfCujiPx97jUuz4v-aINSC4sGAhX4ovwAQwVErtYrr3X4VyBJFWnvUUneQmZGprPmQof-qbfoMb4ybWSmovjUYxyUeTxBllrXZNHk2FZ15_yqL-92rOdN5z4nn7qsJmwvy32l14IwVlNPHuUhiOoYC2heSkfuTaD9KDgJmih9CL5KFliwe44ZiTjlQ5zbK7PiQKAvZr9wniSrVqn8qp4She8pHKWYj2gqRWGhdgYUk7nE7NXF5z3y8cnvQC__ttouHIAGIEktRw2GLU8vcfjuUdhq0Wt7tRgidu2pt-3e7AT9yZQfZQxyhTw7O_hdrtqvm4yAPK6QfyTZKA6JE-bQrFhTTS5hdEDh80vO8nJVfOjORFYrsytlcjZuutraaO1ge0AUX69Hjnnn4ByZEjuyPaUuoMgd0oowQGbdW7esh5JuWP7FJAlJnTrQ2MQv2PDyNdQJ3kM403P8gaX_IsrofhKy7o-5j3duJl7m0p5aKeatrVfd67S-zbWixL-CXSPSKWzk-pS6Eppmx30iJPFibNw_dod_QjCadzNb_tkuqjPV1jeC3T_p_qwnecP63neICsPRCEZw_S6su6Z8vwlJAWsg2R-g2EpDqY-M9Ul8DR-BS18Uu3phj4rekZBhzZ3dT_3SrpYQbZ0Uphk7EgDa4FY1w7Jdp4PxfMupKbAfUMhujqqxljgkzqV-BN4q0YsOKP5YQHTnCCxmPWr1Vy20vJKu5xWQfWoqIg57j5mrT0TAWndxzSdnkcZ903TUxs0Tg8s5JY19ybGaZ7K530G-W6DWCXxI9HpSTyI-1jY3Td2RwgXI1aYCjH3r4InVB_xuXDiCfh0gMZi78A9xRHrLWaFE6FlRLJigwfOYZqErNg6igdgn_JctLYhQJw6amJi-rzvweRAGWs6OnPmWfOJ-0l3p4-hvsBckB6Yh8qyCIfFF4HAIE31ZIzWMXLXjD4NSt19PrSPDoC3amPGdygExKoO1YiPB_xWIFhB2YjdJtd79oLRwrJ-kgG3xfcpEwVeJWDTwGPCXL-Ce2rGO07ECuFZMp75uMp8LVPQwnO2pEohTQXXXJbRYWOyQ-mMx728B0gx5FdSyPaQ6dGfondvMR04kXlfEWad4H5G3vau3_B_TNhC-6iMIR-rxMD0Sr6wPXMh9qLaS_9oAGcqFKYpW8HY4B2CET7PqbQn5cg-W5MbCMUb4MxArsBOoA1b3sYA06uhyhN9gmPMdUIMokq128bTTYzdtXtFGSKdeLModfV1IOymv8TcTZWLxXysCdEeCVsLBcRfG4Yh1myL6L7PXFkUWyPPCR2FdSMqXfeXdR73rFSrSjr_Rf9-podIs1lsMS3CCEe2su-xj5YTn12pktO22UpfVBEOGDoVUkUTZqeeBHSWy8a3qyjD85Lq0gLDNCp-fVYX5hqZLyY3rGSOXt7OoWpXgy4iJ2NjnHm-RHWDWcigkhH-qK0jjOKor3jmcNnnLDEWuQQIWTDFUHBBBEErTahadcEiN_T7VZwKDUY7_L6SSIUQ6goSeCdy3tD0KiV-c-2IMeJpvO9G5kxkTPKaMZxwQ3DDugfp9VqgPv8HB6_Qlui_YB0aj-2cSZRRA2t75ZlN9NZ-F9S0_ibEOKJSc23T80HbPY_Y2oy1lAYEN7hlZKTctszVjwxLM-rt0QYwhLxzQWKYKhos9Pq8vQg_LP-Su74yIRMm7wcVhnj_1at-8291fKJLFurktE9BdEL6i4aKYTVTMJ6VwjVxojX9XDCZSzJBg7cjOaN61vmVQKiOzN2SpGon04eeEQSYuBo_dQxzTUuma838j7KE-zqeXCue6r_Apq5wqjmfF-6H4XLUKZYPTPaCZMj3uOrWV25YrZwZa6jQ2On-cFX0I0MqGFd6YBgpXr5F807wXpa8ulTKc_nuBXqKMcsp-qpFz4cPAtyG8KBtzTN6-M4FW3RNkMPF_HHtNSB0CztwNHEb3YLsjiaVsQzvfhBRwgcXenioX-InBihs4owX8RGccd6qOVFw3zyPC9SeuUX1NZjfSA6mYW1q738CD5uf3mLiYp5Aw5JfPDeRn1IBaErw7HB8LAnel7wwFj4KhbS2ejdl_Al5LDYz8jZguICTHS-CYXpnIqBqd1e5aVzGMcF4nYSqLCvS5-t3AEm6EAPlu16NIB8xqYqLH8irci6wroggnk5QL6wv8tdwXyOFgyiQoMOXOhmHNG6sXGBjE4NVqFy_uf48KTOvr9O7NhemlSbL_o-PEWOqG31dxKaHGJz6nOvphoT2aDQsMM_gtXBv5czI57gEmpeQRLVzCQ2v6379tH1K7-OC0ccq7ruAH6AoVucqPQ9Wr4x2tStDZW2A-UqCXukPGsaSjYmWhBKl0GRGuv4Mawgeka6okzlUOfF30k0RVHGlbe-m-0GQQRxTXiLyFn-SanZI0oYdsZRjrVuqwXmb1G3PkiaB0BSmj-bROzzv4JlfI4rR4_0AkAUvtFXxBnz_ZdWL74Jm4XwlacWlkts_DeKX6-xPuFMq0ceuhXpNsyOEDiVx97Fzf9xfc9V-Q3Ku8JeY4WJvt0YvnBMgMNviuvEgi6UDQfB9Z_Tfe3NH433Yx5l9xWoajc4f2DX_3mZ7xf6PXhZX0LvPU_tDCSQpNvNx5I3Zs0TwHouuLJbv78-WMSsaoVJf1ACuAxXd-l6vbN0IYXxaRbJRRtQ9ny0_BOtBpJrvN4tvVGJUz0293b_BS3mHhtokpLOGnu8e&opi=122715837
            - img [ref=f8e10]
          - link [ref=f8e12] [cursor=pointer]:
            - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskU33E0g4vx5JR--CLqboJt0yG7tq4NB_A2gUGR3V0KvKNaomPLo_6a-Yi3kSMyT9UxuariIOzno0NEt-lL3zrSZxeYaaRjmvrz_ozwKyNmfgNmRQ6mXCHZMsJ7T7GDeT4l4M_jCU8E9IeLRiHuCYkNaG3rNMeOtlVMS-nhqi1WSW0031TkCHyS1RFSkFovm1JW33F-2tGzw3TskCrqrFmrOI_iKQfbNKKrSXfjXwl2Br5cz7hLy2hSpFZSfSkxKy8XNCVMl_epMXFY48-6zbHfpSV5cyCvtw0-5WjO90ze7mk3789VSTL-1La4RWzjcOM1ZDYHTt88j1lbM7rcpNY8HA0Ky9iaD-MTSGOH9NKE99mSZnTL4efQdeEVWt558CywpMA4hBub2U1bdSsUjzJEtq1ux5GA2km0MhWaK2s_1RQ177ds-n-62KUer9GBY57JbWSipxzWwosG8R-Jj9RNJgfCujiPx97jUuz4v-aINSC4sGAhX4ovwAQwVErtYrr3X4VyBJFWnvUUneQmZGprPmQof-qbfoMb4ybWSmovjUYxyUeTxBllrXZNHk2FZ15_yqL-92rOdN5z4nn7qsJmwvy32l14IwVlNPHuUhiOoYC2heSkfuTaD9KDgJmih9CL5KFliwe44ZiTjlQ5zbK7PiQKAvZr9wniSrVqn8qp4She8pHKWYj2gqRWGhdgYUk7nE7NXF5z3y8cnvQC__ttouHIAGIEktRw2GLU8vcfjuUdhq0Wt7tRgidu2pt-3e7AT9yZQfZQxyhTw7O_hdrtqvm4yAPK6QfyTZKA6JE-bQrFhTTS5hdEDh80vO8nJVfOjORFYrsytlcjZuutraaO1ge0AUX69Hjnnn4ByZEjuyPaUuoMgd0oowQGbdW7esh5JuWP7FJAlJnTrQ2MQv2PDyNdQJ3kM403P8gaX_IsrofhKy7o-5j3duJl7m0p5aKeatrVfd67S-zbWixL-CXSPSKWzk-pS6Eppmx30iJPFibNw_dod_QjCadzNb_tkuqjPV1jeC3T_p_qwnecP63neICsPRCEZw_S6su6Z8vwlJAWsg2R-g2EpDqY-M9Ul8DR-BS18Uu3phj4rekZBhzZ3dT_3SrpYQbZ0Uphk7EgDa4FY1w7Jdp4PxfMupKbAfUMhujqqxljgkzqV-BN4q0YsOKP5YQHTnCCxmPWr1Vy20vJKu5xWQfWoqIg57j5mrT0TAWndxzSdnkcZ903TUxs0Tg8s5JY19ybGaZ7K530G-W6DWCXxI9HpSTyI-1jY3Td2RwgXI1aYCjH3r4InVB_xuXDiCfh0gMZi78A9xRHrLWaFE6FlRLJigwfOYZqErNg6igdgn_JctLYhQJw6amJi-rzvweRAGWs6OnPmWfOJ-0l3p4-hvsBckB6Yh8qyCIfFF4HAIE31ZIzWMXLXjD4NSt19PrSPDoC3amPGdygExKoO1YiPB_xWIFhB2YjdJtd79oLRwrJ-kgG3xfcpEwVeJWDTwGPCXL-Ce2rGO07ECuFZMp75uMp8LVPQwnO2pEohTQXXXJbRYWOyQ-mMx728B0gx5FdSyPaQ6dGfondvMR04kXlfEWad4H5G3vau3_B_TNhC-6iMIR-rxMD0Sr6wPXMh9qLaS_9oAGcqFKYpW8HY4B2CET7PqbQn5cg-W5MbCMUb4MxArsBOoA1b3sYA06uhyhN9gmPMdUIMokq128bTTYzdtXtFGSKdeLModfV1IOymv8TcTZWLxXysCdEeCVsLBcRfG4Yh1myL6L7PXFkUWyPPCR2FdSMqXfeXdR73rFSrSjr_Rf9-podIs1lsMS3CCEe2su-xj5YTn12pktO22UpfVBEOGDoVUkUTZqeeBHSWy8a3qyjD85Lq0gLDNCp-fVYX5hqZLyY3rGSOXt7OoWpXgy4iJ2NjnHm-RHWDWcigkhH-qK0jjOKor3jmcNnnLDEWuQQIWTDFUHBBBEErTahadcEiN_T7VZwKDUY7_L6SSIUQ6goSeCdy3tD0KiV-c-2IMeJpvO9G5kxkTPKaMZxwQ3DDugfp9VqgPv8HB6_Qlui_YB0aj-2cSZRRA2t75ZlN9NZ-F9S0_ibEOKJSc23T80HbPY_Y2oy1lAYEN7hlZKTctszVjwxLM-rt0QYwhLxzQWKYKhos9Pq8vQg_LP-Su74yIRMm7wcVhnj_1at-8291fKJLFurktE9BdEL6i4aKYTVTMJ6VwjVxojX9XDCZSzJBg7cjOaN61vmVQKiOzN2SpGon04eeEQSYuBo_dQxzTUuma838j7KE-zqeXCue6r_Apq5wqjmfF-6H4XLUKZYPTPaCZMj3uOrWV25YrZwZa6jQ2On-cFX0I0MqGFd6YBgpXr5F807wXpa8ulTKc_nuBXqKMcsp-qpFz4cPAtyG8KBtzTN6-M4FW3RNkMPF_HHtNSB0CztwNHEb3YLsjiaVsQzvfhBRwgcXenioX-InBihs4owX8RGccd6qOVFw3zyPC9SeuUX1NZjfSA6mYW1q738CD5uf3mLiYp5Aw5JfPDeRn1IBaErw7HB8LAnel7wwFj4KhbS2ejdl_Al5LDYz8jZguICTHS-CYXpnIqBqd1e5aVzGMcF4nYSqLCvS5-t3AEm6EAPlu16NIB8xqYqLH8irci6wroggnk5QL6wv8tdwXyOFgyiQoMOXOhmHNG6sXGBjE4NVqFy_uf48KTOvr9O7NhemlSbL_o-PEWOqG31dxKaHGJz6nOvphoT2aDQsMM_gtXBv5czI57gEmpeQRLVzCQ2v6379tH1K7-OC0ccq7ruAH6AoVucqPQ9Wr4x2tStDZW2A-UqCXukPGsaSjYmWhBKl0GRGuv4Mawgeka6okzlUOfF30k0RVHGlbe-m-0GQQRxTXiLyFn-SanZI0oYdsZRjrVuqwXmb1G3PkiaB0BSmj-bROzzv4JlfI4rR4_0AkAUvtFXxBnz_ZdWL74Jm4XwlacWlkts_DeKX6-xPuFMq0ceuhXpNsyOEDiVx97Fzf9xfc9V-Q3Ku8JeY4WJvt0YvnBMgMNviuvEgi6UDQfB9Z_Tfe3NH433Yx5l9xWoajc4f2DX_3mZ7xf6PXhZX0LvPU_tDCSQpNvNx5I3Zs0TwHouuLJbv78-WMSsaoVJf1ACuAxXd-l6vbN0IYXxaRbJRRtQ9ny0_BOtBpJrvN4tvVGJUz0293b_BS3mHhtokpLOGnu8e&opi=122715837
            - img [ref=f8e14]
        - img [ref=f8e17] [cursor=pointer]
        - generic [ref=f8e28]:
          - img [ref=f8e31]
          - generic [ref=f8e34]:
            - text: Ads by
            - img [ref=f8e35]
          - generic [ref=f8e38]:
            - generic [ref=f8e41] [cursor=pointer]: Ad options
            - generic [ref=f8e44] [cursor=pointer]: Send feedback
            - link [ref=f8e46] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskU33E0g4vx5JR--CLqboJt0yG7tq4NB_A2gUGR3V0KvKNaomPLo_6a-Yi3kSMyT9UxuariIOzno0NEt-lL3zrSZxeYaaRjmvrz_ozwKyNmfgNmRQ6mXCHZMsJ7T7GDeT4l4M_jCU8E9IeLRiHuCYkNaG3rNMeOtlVMS-nhqi1WSW0031TkCHyS1RFSkFovm1JW33F-2tGzw3TskCrqrFmrOI_iKQfbNKKrSXfjXwl2Br5cz7hLy2hSpFZSfSkxKy8XNCVMl_epMXFY48-6zbHfpSV5cyCvtw0-5WjO90ze7mk3789VSTL-1La4RWzjcOM1ZDYHTt88j1lbM7rcpNY8HA0Ky9iaD-MTSGOH9NKE99mSZnTL4efQdeEVWt558CywpMA4hBub2U1bdSsUjzJEtq1ux5GA2km0MhWaK2s_1RQ177ds-n-62KUer9GBY57JbWSipxzWwosG8R-Jj9RNJgfCujiPx97jUuz4v-aINSC4sGAhX4ovwAQwVErtYrr3X4VyBJFWnvUUneQmZGprPmQof-qbfoMb4ybWSmovjUYxyUeTxBllrXZNHk2FZ15_yqL-92rOdN5z4nn7qsJmwvy32l14IwVlNPHuUhiOoYC2heSkfuTaD9KDgJmih9CL5KFliwe44ZiTjlQ5zbK7PiQKAvZr9wniSrVqn8qp4She8pHKWYj2gqRWGhdgYUk7nE7NXF5z3y8cnvQC__ttouHIAGIEktRw2GLU8vcfjuUdhq0Wt7tRgidu2pt-3e7AT9yZQfZQxyhTw7O_hdrtqvm4yAPK6QfyTZKA6JE-bQrFhTTS5hdEDh80vO8nJVfOjORFYrsytlcjZuutraaO1ge0AUX69Hjnnn4ByZEjuyPaUuoMgd0oowQGbdW7esh5JuWP7FJAlJnTrQ2MQv2PDyNdQJ3kM403P8gaX_IsrofhKy7o-5j3duJl7m0p5aKeatrVfd67S-zbWixL-CXSPSKWzk-pS6Eppmx30iJPFibNw_dod_QjCadzNb_tkuqjPV1jeC3T_p_qwnecP63neICsPRCEZw_S6su6Z8vwlJAWsg2R-g2EpDqY-M9Ul8DR-BS18Uu3phj4rekZBhzZ3dT_3SrpYQbZ0Uphk7EgDa4FY1w7Jdp4PxfMupKbAfUMhujqqxljgkzqV-BN4q0YsOKP5YQHTnCCxmPWr1Vy20vJKu5xWQfWoqIg57j5mrT0TAWndxzSdnkcZ903TUxs0Tg8s5JY19ybGaZ7K530G-W6DWCXxI9HpSTyI-1jY3Td2RwgXI1aYCjH3r4InVB_xuXDiCfh0gMZi78A9xRHrLWaFE6FlRLJigwfOYZqErNg6igdgn_JctLYhQJw6amJi-rzvweRAGWs6OnPmWfOJ-0l3p4-hvsBckB6Yh8qyCIfFF4HAIE31ZIzWMXLXjD4NSt19PrSPDoC3amPGdygExKoO1YiPB_xWIFhB2YjdJtd79oLRwrJ-kgG3xfcpEwVeJWDTwGPCXL-Ce2rGO07ECuFZMp75uMp8LVPQwnO2pEohTQXXXJbRYWOyQ-mMx728B0gx5FdSyPaQ6dGfondvMR04kXlfEWad4H5G3vau3_B_TNhC-6iMIR-rxMD0Sr6wPXMh9qLaS_9oAGcqFKYpW8HY4B2CET7PqbQn5cg-W5MbCMUb4MxArsBOoA1b3sYA06uhyhN9gmPMdUIMokq128bTTYzdtXtFGSKdeLModfV1IOymv8TcTZWLxXysCdEeCVsLBcRfG4Yh1myL6L7PXFkUWyPPCR2FdSMqXfeXdR73rFSrSjr_Rf9-podIs1lsMS3CCEe2su-xj5YTn12pktO22UpfVBEOGDoVUkUTZqeeBHSWy8a3qyjD85Lq0gLDNCp-fVYX5hqZLyY3rGSOXt7OoWpXgy4iJ2NjnHm-RHWDWcigkhH-qK0jjOKor3jmcNnnLDEWuQQIWTDFUHBBBEErTahadcEiN_T7VZwKDUY7_L6SSIUQ6goSeCdy3tD0KiV-c-2IMeJpvO9G5kxkTPKaMZxwQ3DDugfp9VqgPv8HB6_Qlui_YB0aj-2cSZRRA2t75ZlN9NZ-F9S0_ibEOKJSc23T80HbPY_Y2oy1lAYEN7hlZKTctszVjwxLM-rt0QYwhLxzQWKYKhos9Pq8vQg_LP-Su74yIRMm7wcVhnj_1at-8291fKJLFurktE9BdEL6i4aKYTVTMJ6VwjVxojX9XDCZSzJBg7cjOaN61vmVQKiOzN2SpGon04eeEQSYuBo_dQxzTUuma838j7KE-zqeXCue6r_Apq5wqjmfF-6H4XLUKZYPTPaCZMj3uOrWV25YrZwZa6jQ2On-cFX0I0MqGFd6YBgpXr5F807wXpa8ulTKc_nuBXqKMcsp-qpFz4cPAtyG8KBtzTN6-M4FW3RNkMPF_HHtNSB0CztwNHEb3YLsjiaVsQzvfhBRwgcXenioX-InBihs4owX8RGccd6qOVFw3zyPC9SeuUX1NZjfSA6mYW1q738CD5uf3mLiYp5Aw5JfPDeRn1IBaErw7HB8LAnel7wwFj4KhbS2ejdl_Al5LDYz8jZguICTHS-CYXpnIqBqd1e5aVzGMcF4nYSqLCvS5-t3AEm6EAPlu16NIB8xqYqLH8irci6wroggnk5QL6wv8tdwXyOFgyiQoMOXOhmHNG6sXGBjE4NVqFy_uf48KTOvr9O7NhemlSbL_o-PEWOqG31dxKaHGJz6nOvphoT2aDQsMM_gtXBv5czI57gEmpeQRLVzCQ2v6379tH1K7-OC0ccq7ruAH6AoVucqPQ9Wr4x2tStDZW2A-UqCXukPGsaSjYmWhBKl0GRGuv4Mawgeka6okzlUOfF30k0RVHGlbe-m-0GQQRxTXiLyFn-SanZI0oYdsZRjrVuqwXmb1G3PkiaB0BSmj-bROzzv4JlfI4rR4_0AkAUvtFXxBnz_ZdWL74Jm4XwlacWlkts_DeKX6-xPuFMq0ceuhXpNsyOEDiVx97Fzf9xfc9V-Q3Ku8JeY4WJvt0YvnBMgMNviuvEgi6UDQfB9Z_Tfe3NH433Yx5l9xWoajc4f2DX_3mZ7xf6PXhZX0LvPU_tDCSQpNvNx5I3Zs0TwHouuLJbv78-WMSsaoVJf1ACuAxXd-l6vbN0IYXxaRbJRRtQ9ny0_BOtBpJrvN4tvVGJUz0293b_BS3mHhtokpLOGnu8e&opi=122715837
              - generic [ref=f8e47]:
                - text: Why this ad?
                - img [ref=f8e48]
        - generic [ref=f8e50]:
          - generic [ref=f8e53] [cursor=pointer]: Not interested in this ad
          - generic [ref=f8e56] [cursor=pointer]: Seen this ad multiple times
          - generic [ref=f8e59] [cursor=pointer]: Ad was inappropriate
          - generic [ref=f8e62] [cursor=pointer]: Ad covered content
        - generic [ref=f8e68]: Thanks. Feedback improves Google ads
        - generic [ref=f8e74]:
          - text: Ad closed by
          - img [ref=f8e75]
        - generic [ref=f8e82]:
          - img [ref=f8e85]
          - generic [ref=f8e87]:
            - generic [ref=f8e89]: Personalize ads on this site
            - link [ref=f8e93] [cursor=pointer]:
              - /url: https://support.google.com/ads/answer/10923348
              - generic [ref=f8e94]:
                - text: Learn more
                - img [ref=f8e95]
  - contentinfo [ref=e150]:
    - generic [ref=e151]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {Page} from "@playwright/test";
  2  | export class CheckBoxPage {
  3  |     readonly page:Page
  4  |     readonly expandAllButton;
  5  |     readonly collapseAllButton
  6  |     readonly checkBoxList;
  7  |     readonly checkBoxListLabel;
  8  |     readonly checkBoxListInput;
  9  |     
  10 | 
  11 | constructor(page: Page) {
  12 |     this.page = page;
  13 |     this.expandAllButton = page.locator("button[title='Expand all']");
  14 |     this.collapseAllButton = page.locator("button[title='Collapse all']");
  15 |     this.checkBoxList = page.locator("div[id='tree-node'] ul");
  16 |     this.checkBoxListLabel = page.locator("label[for='tree-node-1']");
  17 |     this.checkBoxListInput = page.locator("input[id='tree-node-1']");
  18 | }
  19 | async goTo() {
  20 |     await this.page.goto("/checkbox");
  21 | }
  22 | async clickExpandAllButton() {
> 23 |     await this.expandAllButton.click();
     |                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 | }
  25 | async clickCollapseAllButton() {
  26 |     await this.collapseAllButton.click();
  27 | }
  28 | }
```