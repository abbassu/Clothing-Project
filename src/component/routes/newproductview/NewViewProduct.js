import React from "react";
import "./adddepr.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import SliderProduct from "../../sliderProduct/sliderProduct";

function NewViewProduct() {
  const [images1, setImages1] = useState([
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwb3ad0253/images/large/232457_NVY_B.jpg?sw=1120",

    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwa1dbbd31/images/large/232457_NVY.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwe23a733d/images/large/232457_NVY_C.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw586af079/images/large/232457_NVY_D.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw2a1ef7de/images/large/232457_NVY_E.jpg?sw=1120",
  ]);
  const [info1, setinfo1] = useState({
    name: " شنطة لابتوب DELL",
    cost: 500,
    makesalary: 0,
    percent: 20,
  });

  const [images2, setImages2] = useState([
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw2d2221e1/images/large/229145_NVY_C.jpg?sw=1120",

    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwbb3b4471/images/large/229145_NVY.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwdb3a5ff4/images/large/229145_NVY_E.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwbc23ed45/images/large/229145_NVY_D.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw07beaed9/images/large/229145_NVY_B.jpg?sw=1120",
  ]);

  const [info2, setinfo2] = useState({
    name: "بدلة جوتشي GUCCI",
    cost: 1300,
    makesalary: 1,
    percent: 15,
  });

  const [images3, setImages3] = useState([
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw36c41b99/images/large/229090_NVLM_C.jpg?sw=1120",

    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwfbe529b4/images/large/229090_NVLM.jpg?sw=1120",

    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw19b3b3a3/images/large/229090_NVLM_E.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwb619aecf/images/large/229090_NVLM_D.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwbe8e0a16/images/large/229090_NVLM_B.jpg?sw=1120",
  ]);

  const [info3, setinfo3] = useState({
    name: "بنطلون برغرد أصلي BURGARD",
    cost: 90,
    makesalary: 1,
    percent: 5,
  });

  const [images4, setImages4] = useState([
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw05365172/images/large/205083_BRBK_C.jpg?sw=1120",

    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwc3c78c94/images/large/205083_BRBK.jpg?sw=1120",

    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw51a5c0db/images/large/205083_BRBK_E.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw374d6d18/images/large/205083_BRBK_D.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw00669d05/images/large/205083_BRBK_B.jpg?sw=1120",
  ]);
  const [info4, setinfo4] = useState({
    name: "بوت GEOX 819",
    cost: 300,
    makesalary: 1,
    percent: 40,
  });

  const [images5, setImages5] = useState([
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw000726fb/images/large/204643_OLBK_C.jpg?sw=1120",

    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw1462bf01/images/large/204643_OLBK.jpg?sw=1120",

    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwde08db86/images/large/204643_OLBK_E.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw075cf696/images/large/204643_OLBK_D.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwbe6c043d/images/large/204643_OLBK_B.jpg?sw=1120",
  ]);

  const [info5, setinfo5] = useState({
    name: "بدلة بورتو PORTO",
    cost: 300,
    makesalary: 0,
    percent: 40,
  });

  const [images6, setImages6] = useState([
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwf250e110/images/large/4442_WTG.jpg?sw=1120",

    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw8e749831/images/large/4442_WTG_F.jpg?sw=1120",

    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw9c2c8bc8/images/large/4442_WTG_E.jpg?sw=1120",
    "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw08ee328d/images/large/4442_WTG_C.jpg?sw=1120",
  ]);

  const [info6, setinfo6] = useState({
    name: "بوت GEOX 421",
    cost: 350,
    makesalary: 1,
    percent: 100,
  });

  //

  const [images7, setImages7] = useState([
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/365224115_6454598544575499_1466128862702526313_n.png?stp=dst-png_p960x960&_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=EkwO-XsWBkMAX82y_Bt&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfA49bFisVkvc4VXRlyrypw1tPAozYXszxNwtGfmF41HXQ&oe=64DD6E04",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366967637_6454598557908831_104653313739310753_n.png?stp=dst-png_p960x960&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=7C7Xq3LVBwoAX_TPOHe&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfC0fD6rypKgfmFVejqBCsV7o0o9AegZaqwf-t_mVJajpA&oe=64DBDE61",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366964489_6454598574575496_6328514528186447091_n.png?stp=dst-png_p960x960&_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=cCtsE85PwRkAX_Bhksr&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfBfPG2d2eFDuzEOe_OuXrt08Dxxhltp-hXdZIzNxZN0lA&oe=64DD757B",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366951957_6454598587908828_6309333349551869010_n.png?stp=dst-png_p960x960&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=7Udlq8otmdQAX8XRK3d&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfAZtbtgUixv8VHliYcHXUArAkbcMyQP0G7XoTy-UH7HeQ&oe=64DD083F",
  ]);

  const [info7, setinfo7] = useState({
    name: "بوت GEOX 231",
    cost: 350,
    makesalary: 1,
    percent: 100,
  });

  const [images8, setImages8] = useState([
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/367391812_6454594107909276_1704148091244628075_n.png?stp=dst-png_p960x960&_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=HdSRGbHJh1YAX8NfkL4&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfCLlKo08f0TjvllWJaLC4BHS2AeFitQnfWUcd7ib1-gRw&oe=64DD9CF7",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/365179591_6454594171242603_8957850778583968928_n.png?stp=dst-png_p960x960&_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=COpFr1iZ5kwAX-N31a6&_nc_oc=AQl4JSBjfaQiQxPjrYnu-R1vsyr2JYPDLoMNdEQn3B_6Alm11sYO_MZ8gaJq8ZpOPOo&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfC6qGegvmnRh84d9RR0cqmKniUF5cV_quvg_GlQ8SzGZw&oe=64DCA519",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366967579_6454594594575894_8890148903352407631_n.png?stp=dst-png_p960x960&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=JdcaOH6UZs4AX-BMSZ3&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfCWFIsbCTt6fFzshZ3JkYsMARsza0S9dgP0IlmiwC07cg&oe=64DC36FA",
  ]);

  const [info8, setinfo8] = useState({
    name: "بنطلون Bugatti 831",
    cost: 150,
    makesalary: 1,
    percent: 10,
  });

  const [images9, setImages9] = useState([
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366337295_6450978648270822_3158556925808717953_n.png?stp=dst-png_p960x960&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=eRqUQgJr1sEAX8kvtkO&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfCwj2XxnZA76bh3kZqF0UjxI7HDv2qc8Wz285Tmlynfgg&oe=64DD9424",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366682437_6450978694937484_9140068944129346078_n.png?stp=dst-png_p960x960&_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=IdraevgCwhwAX-8yprj&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfBxTcDtO1t9NQRbA4bvKP2lPfux_S9zje5Ridq4e_BXmQ&oe=64DC08A7",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366326819_6450978761604144_6648500924145443100_n.png?stp=dst-png_p960x960&_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=3nUfldOSvbkAX8UlAD4&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfAl7S1fBzdLKEypqXEXOxq4XEq4SfYBHDK7n5mwVt-Oag&oe=64DD0C4D",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366374367_6450978834937470_352421823217449159_n.png?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=WM1zajsy-JMAX90B1xA&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfCRFNwdqG9bTfVQSXn7TVtB2DN4czqC5A3Z3g7tW_RZlA&oe=64DC2390",
  ]);

  const [info9, setinfo9] = useState({
    name: "تيشيرت Casamoda 835",
    cost: 100,
    makesalary: 0,
    percent: 0,
  });

  const [images10, setImages10] = useState([
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/365210063_6454602874575066_4046801219151633888_n.png?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=jxa9Irw5ZhsAX8a3fdI&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfD34C1THVTcJad08UIYCXEZise72E8BGfxD2WSmLdmW9Q&oe=64DD7A72",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/367395193_6454603257908361_714993352380065540_n.png?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=7BquPAY6Wn4AX-wJYe_&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfCOC-K2DDzWNmiDEafGoZmdHbvn96CQCVZ4gRssVfiqaA&oe=64DCF148",
  ]);

  const [info10, setinfo10] = useState({
    name: "تيشيرت Casamoda 899",
    cost: 100,
    makesalary: 0,
    percent: 0,
  });

  const [images11, setImages11] = useState([
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/367393616_6454602737908413_942522685028777571_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=A7HKcaKJ8KUAX-1cE7t&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfBT-RdibPhT9Dunlf4eIrJ3kA5gPpiJ-HrqhbZZRIUMbw&oe=64DC1756",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/366718099_6454603207908366_650659759677284175_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=cXZhC-gExIgAX_3IwlR&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfCBlzDAi2rHe-0OM0VTyqMkmqzJf3Ws_H_DIKv8KSYztg&oe=64DC0C07",
  ]);

  const [info11, setinfo11] = useState({
    name: "تيشيرت Casamoda 215",
    cost: 150,
    makesalary: 0,
    percent: 0,
  });

  const [images12, setImages12] = useState([
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/365763616_6446596888708998_31569909134891163_n.png?stp=dst-png_p960x960&_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=j8c5c4Y47oEAX-bfnRU&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfC2_SeHOpjxp8Ag1SlWSehIYMh2Y4sTSpc5ChRsGerIQQ&oe=64DCE838",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/365785020_6446596932042327_8278449271723154046_n.png?stp=dst-png_p960x960&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=9wrJ0osTTE4AX8pHj5e&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfAObZ0Poo-0bWYnCy-Xuak-2GWNuRm_pW9gULLqS5nxGg&oe=64DBF2F8",
  ]);

  const [info12, setinfo12] = useState({
    name: "بوت GEOX 311",
    cost: 400,
    makesalary: 1,
    percent: 20,
  });

  const [images13, setImages13] = useState([
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/365771165_6446596952042325_6019599001771832067_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=94e21PXUBrkAX-ToIFK&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfC8EDuuKLkyQ4Kz5TVR9090onqCnuRKQhTb23KzL5teQA&oe=64DCB78F",
    "https://scontent.fjrs9-1.fna.fbcdn.net/v/t39.30808-6/365775415_6446596972042323_5542179947722793093_n.png?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=AHpeeap5EdMAX-FHbqQ&_nc_ht=scontent.fjrs9-1.fna&oh=00_AfCtQTXnTPcUQXJ4Dq9tr1WCSY6NDmCtN_Y1rhjdlNXRcg&oe=64DCE36A",
  ]);

  const [info13, setinfo13] = useState({
    name: "بوت GEOX 743",

    cost: 500,
    makesalary: 1,
    percent: 15,
  });

  /////////////////////////////////////////////

  const [departmentName, setDepartmentName] = useState("");

  const handleInputChange = (event) => {
    setDepartmentName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:9999/admin/Department", {
        name: departmentName,
      });
      console.log("Department added successfully");
    } catch (error) {
      console.error("Error adding department:", error);
    }
  };

  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    console.log("dddddddddddddddddddddddddddddddddddd");
    try {
      const response = await axios.get(
        "http://localhost:9999/product/productDetails?id=33"
      );
      setProductDetails(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    console.log("hhhhhhhhh----dedo", productDetails);
  }, [productDetails]);

  return (
    <div className="testdepart">
      <SliderProduct im={images1} information={info1} />
      <SliderProduct im={images2} information={info2} />
      <SliderProduct im={images3} information={info3} />
      <SliderProduct im={images4} information={info4} />
      <SliderProduct im={images5} information={info5} />
      <SliderProduct im={images6} information={info6} />
      <SliderProduct im={images7} information={info7} />
      <SliderProduct im={images8} information={info8} />
      <SliderProduct im={images9} information={info9} />
      <SliderProduct im={images10} information={info10} />
      <SliderProduct im={images11} information={info11} />
      <SliderProduct im={images12} information={info12} />
      <SliderProduct im={images13} information={info13} />

      {/* <input
        type="text"
        value={name}
        onChange={(e) => {
          console.log(e.target.value);
          setname(e.target.value);
        }}
      /> */}
      <button onClick={handleSubmit}> send to database </button>

      <SliderProduct im={images13} information={info13} />
    </div>
  );
}

export default NewViewProduct;
