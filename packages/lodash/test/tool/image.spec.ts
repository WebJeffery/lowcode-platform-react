import { base64ToFile, isFile, loadImageSize } from '../../src/index';

// 125 * 125 图像
const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAYAAACPgGwlAAAFJElEQVR4Xu2dS0hUURzG/1Yqlj2otJe10AqCoiJaFFTUpgcUhLaKCIogKCEiCl0U1SIIF1EIQlFEtCmkpbWSHlAQYRYUlI9Ie6nYmI9hfIx1LpzL3PGO/aeuM/r/f7PRufe7d873/ea75xw3ZjTumDtMeKlKIAPQVfF2zAK6PuaArpA5oAO6xgQUesacDugKE1BoGU0HdIUJKLSMpgO6wgQUWkbTAV1hAgoto+mArjABhZbRdEBXmIBCy2g6oCtMQKFlNB3QFSag0DKaDugKE1BoGU0HdIUJKLSMpgO6wgQUWkbTAV1hAgoto+mArjABhZbRdEBXmIBCy2g6oCtMQKFlNB3QFSag0DKaDugKE1BoGU0HdIUJKLSMpgO6wgQUWkbTAV1hAgoto+mArjABhZbRdEBXmIBCy2g6oCtMQKFlNB3QFSag0DKaDugKE1BoGU0HdIUJKLQ8bpo+fft+ylxYSJ23LvpisOfNST/N7ENniYa9/0xy4GsTdT+6+09Yx9t4/slEgovSDt2EO3P3YcoqWuUMsWln3oihFlTWUlbhSvf4UKid2iqOUfhVrXussKZ9xHXh10/oW1lxUnmNt/EkNXimOK3QTTtn7Sv1DDUees66rTT/3B0a/NFCvc9raOqf9+YL0PfiIX0/f8ADPdrXTZEPde6xyMd66rx5wXlvnwThN8/cL4ttc7S3i0L3rjqaVI2HyWdMZGmFbhwtvv7cgZm7ZS9NyS/wbboBb1ttwQy2tdLng2s90OOPxSa24FI15azZTAOtDdRyZAOZe84ru0GTps2g0P1r7pcjVeMZE5rMm6Yduh3nktt1CaHHesk/XUW5W4sp8v4lfTm5ywN9eCBCQz/baOBLE0Ua3rgg4z/DPCUmz5xD2SvWU6IpIBXjYTIKXDahoNtHvUmho/KMZ5HmN6f31FZT2+Wjbmix12dkZtNoTwYO9P8dT+A0mTecMNBNwPmnKmnyrDyKhxnv1U4B0d5f9KmkyHPaPinMwfYrJxKu7v8GPajxMDkFKpsQ0JMJ2KZjmm8e9817CjxNt/O4Odjf+JZaj2/zDXQ06EGNJ1CSSdws7dDNAsvsr7OXr3UWVeG6x87wv5WXOD9jAzZbtf7md669nscP3KbOLa2gaE+Xc27axl2UWbB0xLxvFmnmuJnTzU/7e+wuIJXjSYJToNK0Q/ebi41Du3Xz20bZBGJX3fH3Mav0jqpyd9Xvt3o3W0Ezt492H/tZQY8nUIpJ3izt0J39s8/L7q9N03NWb/LVhOuferZyWYuX0WDnD2evHv+XOPs5sdc4+/RFRX+eECFnn25eqRpPkpwClacdeqBucDNWAoDOikmWCNBl8WS5AXRWTLJEgC6LJ8sNoLNikiUCdFk8WW4AnRWTLBGgy+LJcgPorJhkiQBdFk+WG0BnxSRLBOiyeLLcADorJlkiQJfFk+UG0FkxyRIBuiyeLDeAzopJlgjQZfFkuQF0VkyyRIAuiyfLDaCzYpIlAnRZPFluAJ0VkywRoMviyXID6KyYZIkAXRZPlhtAZ8UkSwTosniy3AA6KyZZIkCXxZPlBtBZMckSAbosniw3gM6KSZYI0GXxZLkBdFZMskSALosnyw2gs2KSJQJ0WTxZbgCdFZMsEaDL4slyA+ismGSJAF0WT5YbQGfFJEsE6LJ4stwAOismWSJAl8WT5QbQWTHJEgG6LJ4sN4DOikmWCNBl8WS5AXRWTLJEgC6LJ8sNoLNikiUCdFk8WW4AnRWTLNFvXskYA3TG3JwAAAAASUVORK5CYII=";



describe('sbout image tool test', () => {
  it('should get true when set base64', () => {
    expect(isFile(base64ToFile("data:application/octet-stream;base64,"))).toBe(true);

    expect(isFile(base64ToFile(base64))).toBe(true);

    expect(isFile(base64ToFile(''))).toBe(false);
  })

  it('should get false when set null string', () => {
    expect(isFile(base64ToFile(''))).toBe(false);
  })


  it('should get image size when set image file', async () => {
    expect(await loadImageSize(base64ToFile(base64) as File)).toEqual({ height: 125, width: 125 });
  })
})
