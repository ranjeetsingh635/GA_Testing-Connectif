import React from "react";
import styles from "./ProductDetailTab.module.css";

function ProductDetailTab() {
  return (
    <article className={`${styles.item}`}>
      <h2 className="mb-[2rem] text-primaryBlack leading-[4.2rem] font-semibold text-[2.4rem]">
        About Supplier
      </h2>
      <p>
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters opposed to using &apos;Content here, content here&apos;, making
        it look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for &apos;lorem ipsum&apos; will uncover many web sites still in
        their infancy.
      </p>
      <p>Injected humour and the like</p>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          numquam.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          numquam.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          numquam.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          numquam.
        </li>
      </ul>
    </article>
  );
}

export default ProductDetailTab;
