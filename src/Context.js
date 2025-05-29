import React, { useState, createContext, useEffect, useContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [refrech, setRefrech] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [refrechCart, setRefrachCart] = useState(false);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, [refrechCart]);
  // get all Product
  //const [product, setProduct] = useState([]);
  //const [category, setCategory] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [coupons, setCoupons] = useState([]);

  /* const getSingleProduct = async (id) => {
    try {
      setLoading(true);
      const data = await fetch(
        `http://localhost:1337/api/products/${id}?populate=productImage`,
        {
          method: "GET",
        }
      );
      const tempData = await data.json();
      let tempProduct = [tempData.data].map((item) => {
        const { id } = item;
        const { url } = item.attributes.productImage.data[0].attributes;

        const {
          title,
          slug,
          shipping,
          price,
          metaTitle,
          metaDescription,
          description,
          category,
        } = item.attributes;
        return {
          id,
          url: `http://localhost:1337${url}`,
          title: `${title}`,
          slug,
          shipping,
          price,
          metaTitle,
          metaDescription,
          description,
          category,
        };
      });

      setSingleProduct([...tempProduct]);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllProduct = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        "http://localhost:1337/api/products?populate=productImage",
        {
          method: "GET",
        }
      );
      const tempData = await data.json();
      let tempProduct = tempData.data.map((item) => {
        const { id } = item;
        const { url } = item.attributes.productImage.data[0].attributes;

        const {
          title,
          slug,
          shipping,
          price,
          metaTitle,
          metaDescription,
          description,
          category,
        } = item.attributes;
        return {
          id,
          url: `http://localhost:1337${url}`,
          title,
          slug,
          shipping,
          price,
          metaTitle,
          metaDescription,
          description,
          category,
        };
      });
      console.log(tempProduct);
      setProduct([{}, ...tempProduct]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const gerAllCategory = async () => {
    setLoading(true);
    const data = await fetch("http://localhost:1337/api/categorys", {
      method: "GET",
    });
    const tempData = await data.json();
    const tempCategory = tempData.data.map((item) => {
      const { name } = item.attributes;
      return {
        name,
      };
    });

    setCategory(tempCategory);
  };

  useEffect(() => {
    getAllProduct();
    gerAllCategory();
  }, [refrech]); */
  // get all Product

  /////////////////////////
  ////////////// get all coupons ////////////////
  /* const getAllCoupons = async () => {
    try {
      const data = await fetch(`http://localhost:1337/api/coupons`, {
        method: "GET",
      });
      const allCoupons = await data.json();
      const tempCoupons = allCoupons.data.map((item) => {
        const info = item.attributes.productID.split(",");
        const [ProductId, url] = info;
        const { id } = item;
        const { code, discount, dateOne, dateTwo, createdAt, publishedAt } =
          item.attributes;

        return {
          id,
          ProductId,
          url,
          code,
          discount,
          dateOne,
          dateTwo,
          createdAt,
          publishedAt,
        };
      });
      setCoupons(tempCoupons);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCoupons();
  }, []); */

  const product = [
    {
      id: 1,
      url: "https://ae01.alicdn.com/kf/S5f13174050db4af18c5acb540f3c34e65/couteurs-sans-fil-Bluetooth-TWS-oreillettes-profonde-basse-micro-affichage-de-puissance-LED-pour-Sport.jpg_Q90.jpg_.webp",
      title: "Écouteurs sans fil Bluetooth TWS",
      slug: "Écouteurs sans fil Bluetooth TWS",
      shipping: "850",
      price: "4500",
      metaTitle: "Lorem ipsum dolor sit amet",
      metaDescription: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.",
      category: "phone",
    },
    {
      id: 2,
      url: "https://ae01.alicdn.com/kf/S9588e98d43f44f5c8931a58e1d391790Y/Chaussures-de-Sport-tricot-es-pour-femmes-Tennis-plates-de-marque-de-luxe-choisissez-Espadrille-pour.jpg_Q90.jpg_.webp",
      title: "Chaussures de Sport tricotées pour femmes",
      slug: "Chaussures de Sport tricotées pour femmes",
      shipping: "850",
      price: "2500",
      metaTitle: "Lorem ipsum dolor sit amet",
      metaDescription: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.",
      category: "sport",
    },
    {
      id: 3,
      url: "https://ae01.alicdn.com/kf/Sb01d9d04224f4658bf6e1dbb300ea77eP/Lampe-de-plafond-en-fer-Vintage-E27-lumi-re-r-tro-industrielle-r-glable-4-feuilles.jpg_Q90.jpg_.webp",
      title: "Lampe de plafond en fer Vintage E27",
      slug: "Lampe de plafond en fer Vintage E27,",
      shipping: "850",
      price: "20500",
      metaTitle: "Lorem ipsum dolor sit amet",
      metaDescription: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.",
      category: "photography",
    },
    {
      id: 4,
      url: "https://ae01.alicdn.com/kf/Sf59c1f7e243d4b64aa37795cb7573758f/Happyhere-Smartphone-A01-android-5-5-pouces-NFC-snapdragon-3G-WCDMA-GSM-2022-WIFI-GPS-bon.jpg_Q90.jpg_.webp",
      title:
        "Happyhere – Smartphone A01, android, 5.5 pouces, NFC, snapdragon 3G",
      slug: "Happyhere – Smartphone A01, android, 5.5 pouces, NFC, snapdragon 3G",
      shipping: "850",
      price: "30500",
      metaTitle: "Lorem ipsum dolor sit amet",
      metaDescription: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.",
      category: "phone",
    },
    {
      id: 5,
      url: "https://ae01.alicdn.com/kf/S6e6678b9f9ba4b1ea115cc809fef661fg/M-moire-de-serveur-d-ordinateur-de-bureau-mod-le-DDR3-capacit-4-go-8-go.jpg_Q90.jpg_.webp",
      title: "Mémoire de serveur d'ordinateur de bureau,",
      slug: "Mémoire de serveur d'ordinateur de bureau,",
      shipping: "850",
      price: "2500",
      metaTitle: "Lorem ipsum dolor sit amet",
      metaDescription: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut assumenda corporis, veniam nulla nesciunt saepe in quos iure.",
      category: "computer",
    },
  ];

  const category = [
    {
      name: "sport",
    },
    {
      name: "phone",
    },
    {
      name: "computer",
    },
    {
      name: "industry",
    },
  ];
  return (
    <ProductContext.Provider
      value={{
        product,
        loading,
        category,
        //setProduct,
        refrech,
        setRefrech,
        singleProduct,
        setSingleProduct,
        //getSingleProduct,
        coupons,
        showCart,
        setShowCart,
        cart,
        setCart,
        refrechCart,
        setRefrachCart,
        setLoading,
        setCoupons,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider };
