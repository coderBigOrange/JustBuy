let goodsUrl = `
https://s5.mogucdn.com/mlcdn/c45406/200522_4i135h3cd4ldl2467jh75l9127jgg_3999x5999.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/c45406/190628_5caje13gh3c86d5d1aagd4aba4h4f_640x960.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/55cf19/200428_1bd5kd6l5l20cd3955e6aici7h26f_640x960.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/c45406/190827_1851hifk4kk3j2l2kc070l36ij2li_640x853.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/c45406/200813_7h9038g0f713g1d0fkbg69ai36838_4501x5999.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/c45406/200609_7k546710194ail6k3d41icld6bf76_3999x5999.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/55cf19/210504_11ca8if7e14177bcj4af0f3ae0ced_640x960.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/55cf19/180508_3l7ii800be4469gcb72a4djg44adh_640x832.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/c45406/200523_7578gk4jai7agj3b9gfda51aiee84_3999x5999.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/55cf19/210416_27icec2cgdl348fib10bh385eid19_640x960.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/c45406/200501_3fbaakbe34l1clc8chggc4ca26jdb_640x960.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/c45406/200518_704d0la59cdf874gki1lca48j2ag7_3999x5999.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/c45406/190222_07g1k78ijb14ek9bdebi08la4k725_640x960.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/c45406/200726_4kafdkkek0e2i67i7dc212589cha5_3999x5330.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/c45406/200501_5iacic3423426g0iidj6bggh19ll7_640x960.jpg_520x694.v1cAC.40.webp
https://s5.mogucdn.com/mlcdn/c45406/200321_67l2kfc706hiceg2bdh8aej2hjjg2_3749x4999.jpg_520x694.v1cAC.40.webp
`
let shopInfo = [
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
  {
    price:98.00,
    cfav: 197
  },
]
export function getShops(type, page) {
  let shops = [];
  let urls = goodsUrl.split("\n").slice(1,-1);
  for (let i = 0, len = urls.length; i< len; i++) {
    let img = {};
    img['image'] = urls[i];
    img['title'] = type === 'pop' ? '流行' : type === 'new' ? '新款' : '热卖';
    img['price'] = shopInfo[i].price;
    img['cfav'] = shopInfo[i].cfav;
    img['iid'] = i + page * len;
    shops.push(img);
  }
  return shops
}
export const swiperImg = `
//m.360buyimg.com/mobilecms/s700x280_jfs/t1/115456/40/7331/100669/5ec3a9c6E3dcbadb7/46071c04455c0d5b.jpg!cr_1053x420_4_0!q70.jpg.dpg
//imgcps.jd.com/ling4/10025966979080/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5c131e9282acdd181da661a1/e0930afc/cr_1125x449_0_166/s1125x690/q70.jpg
//m.360buyimg.com/mobilecms/s700x280_jfs/t1/173562/4/10394/324274/60a44a67Efa390111/f03d826120144575.jpg!cr_1125x449_0_166!q70.jpg.dpg
//m.360buyimg.com/mobilecms/s700x280_jfs/t1/191773/7/4166/167659/60a5f8f5E12f3b0bc/1f3c517ffe136d8a.jpg!cr_1125x449_0_166!q70.jpg.dpg
//m.360buyimg.com/mobilecms/s700x280_jfs/t1/184530/6/3520/83684/609b1b4aE3029679e/03525756a8864671.jpg!cr_1125x449_0_166!q70.jpg.dpg
//m.360buyimg.com/mobilecms/s700x280_jfs/t1/170308/16/4558/258588/60118cbcEedf1b5a2/3eeb81a966528fd8.jpg!cr_1125x449_0_166!q70.jpg.dpg
//m.360buyimg.com/mobilecms/s700x280_jfs/t1/170757/12/3116/318755/60040167E3674dbad/5d911a1ea141bf31.jpg!cr_1125x449_0_166!q70.jpg.dpg
//m.360buyimg.com/mobilecms/s700x280_jfs/t1/167245/17/13432/149823/60540ceeE0a928512/677088217d8a00aa.jpg!cr_1053x420_4_0!q70.jpg.dpg
`
export const recommendUrl = `
//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png
//m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png
//m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png
//m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png
//m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png
//m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png
//m.360buyimg.com/mobilecms/s120x120_jfs/t1/179511/33/4023/3422/609e0d45Ea495a996/3783165b48cf1e08.png
//m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png
//m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png
//m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png
`
export const recommendTitle = ['随心超市', '数码电器', '随心服饰', '随心生鲜', '随心到家', '充值缴费', '9.9元拼', '领券', '领金贴', '橙子会员']

export const featureUrl = `
https://s10.mogucdn.com/mlcdn/c45406/210218_2d5ha15814klee6i405dldc1l1fg2_150x150.png_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/210127_28lafia2el07d272h21h0dk09dcgb_150x150.webp_999x999.v1c0.100.jpg
https://s10.mogucdn.com/mlcdn/c45406/210218_8dd5g7cj13beaj50d7b29da19kaah_150x150.png_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/210218_28j7d696795ccb7llejdce9keli0c_150x150.png_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/210218_16dal2iaj300ce73ada65g0514jlk_151x150.png_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/210218_2bdj4144677j5hlbdi5d490a2ad5c_150x150.png_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/200327_2lliak11gh3a6714a9k5ifi0e6b4l_135x135.jpg_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/210218_4jk839952i9aaac7jbh12jhgbkk88_151x150.png_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/210218_21547k708k2d2g257i8i6h1j9i59f_150x150.png_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/210218_6gkk1d58i9gfgba91k24kdkeke1jc_151x150.png_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/210218_30e0clik70137dhd2b51dkael0i88_151x150.png_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/210218_435b14j61676clgbd60k99d72d53j_150x150.png_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/210218_65b6l20557h1dklh2g95b17ajal8k_150x150.png_640x640.v1cAC.40.webp
https://s10.mogucdn.com/mlcdn/c45406/210218_51cdb7a3g5698612lg076465bk5d4_150x150.png_640x640.v1cAC.40.webp
`

export const featureTitle = ['女装', '新人福利', '上衣', '女鞋', '裤子', '美妆护肤', '裙子', '母婴/童装', '套装', '男装男鞋', '内衣', '配饰', '家居', '包包']