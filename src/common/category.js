export const sortsList = ['热门推荐','女装', '男装', '电脑办公', '个护清洁','计生情趣', '钟表珠宝', '宠物生活', '礼品鲜花', '美妆护肤', '母婴童装', '运动户外', '内衣配饰','家具家装', '箱包手袋', '奢侈品', '艺术邮币']

const categoryGoods = `
//img30.360buyimg.com/focus/s140x140_jfs/t1/115539/34/8480/3602/5ecf2a6aE63758973/f77877220c415ca0.jpg
//img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg
//img20.360buyimg.com/focus/s140x140_jfs/t19471/233/655303672/4619/b23fea4b/5a9fb684Ne1ec9fe8.jpg
//img11.360buyimg.com/focus/s140x140_jfs/t18130/206/667191027/4173/bf767ab4/5a9fb67fN3834e3c9.jpg
//img10.360buyimg.com/focus/s140x140_jfs/t18343/191/641645855/3307/d3a4e7b4/5a9fb694N13609fcd.jpg
//img13.360buyimg.com/focus/s140x140_jfs/t1/116921/2/8410/5100/5ecf2c9aE48dd94de/1e54e5d5936ec59c.jpg
//img11.360buyimg.com/focus/s140x140_jfs/t19732/6/697088077/2894/2788a72/5a9fbfd2Ncc01c1b5.jpg
//img11.360buyimg.com/focus/s140x140_jfs/t14266/108/2448202334/2099/c038057b/5a9fbfc7N33c2ad32.jpg
//img14.360buyimg.com/focus/s140x140_jfs/t16126/212/2272437372/3302/c9af3547/5a9fbfa0N591929da.jpg
//img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg
//img30.360buyimg.com/focus/s140x140_jfs/t11953/286/2195921828/5728/75b86d5b/5a127fbaN2780918c.jpg
//img30.360buyimg.com/focus/s140x140_jfs/t12832/251/703541500/2505/2cb22be9/5a126bcdN5660d28e.jpg
//img11.360buyimg.com/focus/s140x140_jfs/t12364/230/737857721/2528/bf50d6c0/5a126bc2N924c1ec9.jpg
//img11.360buyimg.com/focus/s140x140_jfs/t15238/344/2460518102/2661/c695b09c/5a9fc13fN217b0032.jpg
//img30.360buyimg.com/focus/s140x140_jfs/t11044/285/2200828180/4219/b8687cad/5a12846cNf3df9f87.jpg
//img20.360buyimg.com/focus/s140x140_jfs/t12922/55/742924420/4591/5e5d72e9/5a1284d0Nbdba3775.jpg
//img10.360buyimg.com/focus/s140x140_jfs/t11791/249/2180710603/1984/b8d02ddf/5a128463Nce1ae193.jpg
//img10.360buyimg.com/focus/s140x140_jfs/t11401/222/2191435115/3414/8d163d49/5a1284dfNb5bd1460.jpg
//img12.360buyimg.com/focus/s140x140_jfs/t12346/326/736792997/3041/8c591fbc/5a1284e4N5f6ac63d.jpg
//img11.360buyimg.com/focus/s140x140_jfs/t11296/167/2160342769/2309/f04ca6ca/5a126a5aN99085a6b.jpg
`
export function GetCateGoryGoods(categoryId) {
  //点击rootList项传回一个id,根据id请求对应数据
  //这里仅模拟过程
  //假设已经根据id获得了商品信息
  let Goods = [];
  let urls = categoryGoods.split("\n").slice(1,-1);
  for (let i = 0, len = urls.length; i< len; i++) {
    let img = {};
    img['image'] = urls[i];
    img['text'] = "衣服";
    Goods.push(img);
  }
  // if (categoryId === 0)
    return Goods;
  // else return Goods.slice(0, 5);
}