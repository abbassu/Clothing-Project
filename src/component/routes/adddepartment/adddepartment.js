import React from "react";
import ImageSlider from "../../imageslider/ImageSlider";
import "./adddepr.scss";
import SliderProduct from "../../sliderProduct/sliderProduct";
import { useState } from "react";
function Adddepartment() {
  const [images1, setImages1] = useState([
    "https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/365256085_6424126297622724_4360210348240752766_n.png?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=WWUvj8ufuxIAX9w1ubP&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfBtOvKjKDqYYqohyYsjavW8-Afw_VFqT2m47IIIYAnWlA&oe=64D7EFA0",
    "https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/365036010_6424126417622712_899384674464093156_n.png?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=bGi6bRwmJMMAX-kNrHk&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfA980-sNry1Uue0K3HEk_0I5qL2KhDVNFW2qH6oybhhEA&oe=64D7D23F",
    "https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/364075902_6427486693953351_5613735654206660303_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=6GHLCxxIUisAX_IgMMe&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfBBfKUEkFPkbwpiKxeTJn_TcNsYBDZ9x1ojjhOifqJfsw&oe=64D8E8FD",
    "https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/365094027_6424126294289391_2211168095409642893_n.png?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=gkCxkOSAdJUAX_GugUf&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfCYw15zLjO7EiJLCQc0ITwgsNvzFxLR5C9NEmbJHqTApw&oe=64D81B89",
    "https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/365152480_6424126254289395_5724773236817374115_n.png?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=jLvbD2S3a0UAX8Lkv-5&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfBz2IL4quSnnWJ5LXKY5Tf2lAezKlClvXNX-RRvni150g&oe=64D7F7EE",
  ]);
  const [info1, setinfo1] = useState({
    name: "لابتوب ديل DELL",
    cost: 500,
    makesalary: 0,
    percent: 20,
  });

  const [images2, setImages2] = useState([
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/365795666_6446595075375846_6283037430847160430_n.png?stp=dst-png_p960x960&_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=Brwu-EMiFTsAX_YCubZ&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfDxhwFHHyjhOxR_Gxpd_B96AHr6hkL19YPxhw5WFiSyng&oe=64DB1E6E",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/366615686_6446594985375855_2155138353575220217_n.png?stp=dst-png_p960x960&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=gD5Y8Ma02xcAX-lcIFX&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfDuEZPQfH9zMbxX-CQtn_XnMi0_gctsiCzL5WT3cLTeWw&oe=64D9E5DF",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/365780806_6446594995375854_6157184754481337854_n.png?stp=dst-png_p960x960&_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=2sMBGVfCo9cAX-9esCj&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfD9bhSkdZYK11KkDyKD1guD-bseNzAT-FvrC-Sm1E0aug&oe=64DA0CC4",
  ]);

  const [info2, setinfo2] = useState({
    name: "بدلة جوتشي GUCCI",
    cost: 1300,
    makesalary: 1,
    percent: 15,
  });

  const [images3, setImages3] = useState([
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/366330231_6440437552658265_3283510552906393958_n.png?stp=dst-png_p960x960&_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=IT1DuJSwo0MAX_vcF41&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfCUSwDpjaogcKDNst2Ji7R4Tawz3GT_Wly_RnHLHNS-OA&oe=64DB1C7C",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/366289044_6440437475991606_4078546399189777322_n.png?stp=dst-png_p960x960&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=3OlUO43f-wgAX_3o22t&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfB5Hkcj4fXpMn1bapMV8YKqbnbBCgH23D4hDuyhLQqv5w&oe=64DB63EA",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/366299779_6440437622658258_4480390302434715962_n.png?stp=dst-png_p960x960&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=89ErHyr9RisAX8UL3tk&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfCU7dNMKo1KhNHV1TwFG79XJ-MxsYyDs1gpPXJL9LUM9Q&oe=64DB953A",
  ]);

  const [info3, setinfo3] = useState({
    name: "بنطلون برغرد أصلي BURGARD",
    cost: 90,
    makesalary: 1,
    percent: 5,
  });

  const [images4, setImages4] = useState([
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/362668747_6426747660693921_454541017640757342_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=ilghnla13wAAX-PsSmx&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfAY_iRfGqmnQtV_pPv4UEiM-5U1s0acDGo8z7j23nXKxA&oe=64D9DFBF",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/363421895_6426747610693926_2250276396838782839_n.png?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=kDeyxhcSOgoAX9nYblZ&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfDFpNDNSDbdCE_WoQmTpdxF6TWsIRaHemr213c3J9DrkQ&oe=64DB5B82",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/365280383_6426747577360596_5157497013036866885_n.png?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=ghvz7T8o54MAX9FiRtf&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfDrCpobZQc31UpmVwiEA2sWQ8tWdHcvPha6cdgnIPpkSw&oe=64DB9E3B",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/362648870_6426747630693924_1024695783585965033_n.png?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=5vcP1R1pGxgAX-F6yIl&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfC2BKLzWOB1mnO__GA8ajnOsBZqD2BsKa5eF8oINRkFyg&oe=64DA6FA6",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/364744572_6426747564027264_4882091351106548632_n.png?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=yTWzGH9wMjwAX8Lg1yi&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfBucdmH4vpyJhrE3zlHe80QGiboq6iOcU6HtL7b3ICwKg&oe=64DA6CCB",
  ]);
  const [info4, setinfo4] = useState({
    name: "بوت GEOX 2023",
    cost: 300,
    makesalary: 1,
    percent: 40,
  });

  const [images5, setImages5] = useState([
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/365123866_6424129734289047_171077996249582748_n.png?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=F6F0xO4oNCkAX8VWejn&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfAa-RoJ0g554A0ZhQgEMChbmjKem0XtbkSKT2eP5VwbBA&oe=64DA6B47",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/365281874_6424129784289042_3843737991710274695_n.png?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=fiHWklJ6b-kAX-1Mbr8&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfDACRNjniK1pIIllGD3dd7rDb5uJGMNisGo7vaHq9rGZA&oe=64DACAC7",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/365253834_6424129767622377_2190809143776094157_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=FZvs0CilwG8AX87vyF6&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfArMXAmq21HN8CCZh43TiZd-mpPvhKA5f0QFobl58Y7bQ&oe=64DB3B11",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/365267907_6424129797622374_6354245540277726336_n.png?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=UJRJ9TKZJf4AX-0XCKP&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfByya1v2zNCTTudoFUYZ9mHzF_jEsGM9OT0jmdLyIINIA&oe=64DBC3BD",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/365138470_6424129897622364_3428263815096361861_n.png?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=2iPhD1ToSscAX90k8Lm&_nc_oc=AQmWep9ltEsi3LZOr0X8SdIMvcL86rzL-afNMRE9BdxHtrR9CgUnJsYo57SxDQYb12M&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfDHH_p0RwyLHcdaJwmOa_nRZllXekloc6MU_rHM88MibA&oe=64DB3ABF",
    "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/365205642_6424129807622373_2332530589783759967_n.png?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=8ARR5tR_QRAAX_cpHQH&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfDyR_XxtaD5U9G7Y2tkyIMaCHJoBK1SG2AbFcTttOY63w&oe=64DAA2EF",
  ]);

  const [info5, setinfo5] = useState({
    name: "بدلة بورتو PORTO",
    cost: 300,
    makesalary: 0,
    percent: 40,
  });

  const [images6, setImages6] = useState([
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/363396107_6417572998278054_230404540721776105_n.png?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=VL3OCw67GH0AX9gV5Mg&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfDL_NkYKEZWFgY95pgAL9_8GZh8oKt4vK0xpYlcOnm8lA&oe=64DA654A",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/362683615_6417573018278052_5100147129862833291_n.png?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=I9zxOq6gQt0AX-2igz2&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfBrznCZ-kSy1fsVwOV71HLrEv8v_VbthiaMgz4K361Q0w&oe=64DB5083",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/362270964_6417572964944724_3707273772401969099_n.png?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=8fxAhqaXzDkAX97Z3oB&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfCEH3zt6vFHHgOhlkCvJz_EzVmwvBqkSTHb4d77TbGgnQ&oe=64DAECFF",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/362964964_6417572801611407_2117359867313808822_n.png?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=05yfHPg4qpMAX_By5MZ&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfCaCRwjxq63e67RtuX2PWstue2ujGORUVn5oB8Ak1Uxtw&oe=64DA3068",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/362246327_6417572961611391_8675698427698194414_n.png?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=4bhRLwm0IfoAX9A5D5Y&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfBKnPtJdXqyZ2bUm_n7qGNlmzUtIK1boclVMMBXtPVYMg&oe=64DBB519",
  ]);

  const [info6, setinfo6] = useState({
    name: "بوت GEOX 2022",
    cost: 350,
    makesalary: 1,
    percent: 10,
  });

  return (
    <div className="testdepart">
      <SliderProduct im={images1} information={info1} />
      <SliderProduct im={images2} information={info2} />
      <SliderProduct im={images3} information={info3} />
      <SliderProduct im={images4} information={info4} />
      <SliderProduct im={images5} information={info5} />
      <SliderProduct im={images6} information={info6} />
    </div>
  );
}

export default Adddepartment;
