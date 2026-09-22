const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = DATA.find(item => item.id === id);

const productContainer = document.getElementById("product");
const cardContainer = document.getElementById("prod-card");

if (!product) {
    cardContainer.innerHTML = `
        <h1>Товар не знайдено</h1>
        <p>ID: ${id}</p>
        <a href="index.html">Повернутися до каталогу</a>
    `;
} else {
    const breadcrumbs = document.createElement("nav");
    breadcrumbs.className = "breadcrumbs";

    breadcrumbs.innerHTML = `
        <a href="index.html">Каталог</a>
        <span>›</span>
        <a href="index.html?category=${encodeURIComponent(product.cat || "")}">
            ${product.cat || ""}
        </a>
        <span>›</span>
        <span>${product.name || ""}</span>
    `;

    productContainer.insertBefore(breadcrumbs, cardContainer);

    const images = product.images || (product.img ? [product.img] : []);
    const mainImage = images[0];

    const thumbnails = images.length > 1 ? `
        <div class="product-thumbnails">
            ${images.map((image, index) => `
                <img
                    src="${image}"
                    alt="${product.name || ""}"
                    class="product-thumbnail ${index === 0 ? "active" : ""}"
                    data-image="${image}"
                >
            `).join("")}
        </div>
    ` : "";

    const tableRows = (product.rows || []).map(row => {
        const values = row.thickness || row.values || [];
        const prices = row.prices || [];

        return `
            <tr class="size-row">
                <td>${row.diameter || ""}</td>
                <td>
                    <div class="variants" style="grid-template-columns:repeat(${Math.max(values.length, 1)},1fr)">
                        ${values.map(value => `<span>${value}</span>`).join("")}
                    </div>
                </td>
            </tr>

            <tr class="price-row">
                <td class="price-label">Ціна</td>
                <td>
                    <div class="prices" style="grid-template-columns:repeat(${Math.max(prices.length, 1)},1fr)">
                        ${prices.map(price => `<span>${price}</span>`).join("")}
                    </div>
                </td>
            </tr>
        `;
    }).join("");

    cardContainer.innerHTML = `
        <div class="product-page">

            <div class="product-gallery">

                <div class="product-main-image-box">
                    ${mainImage ? `
                        <img
                            id="product-main-image"
                            class="product-main-image"
                            src="${mainImage}"
                            alt="${product.name || ""}"
                        >
                    ` : `
                        <div class="no-image">Немає зображення</div>
                    `}
                </div>

                ${thumbnails}

            </div>

            <div class="product-info">

                <h1>${product.name || ""}</h1>

                <p class="product-sub">
                    ${product.sub || ""}
                </p>

                <div class="product-brands">
                    <strong>Бренд:</strong>
                    ${product.brands?.length
                        ? product.brands.join(", ")
                        : "—"}
                </div>

                ${product.rows?.length ? `
                    <div class="product-table-wrapper">

                        <table class="product-table">

                            <thead>
                                <tr>
                                    ${(product.cols || [])
                                        .map(col => `<th>${col}</th>`)
                                        .join("")}
                                </tr>
                            </thead>

                            <tbody>
                                ${tableRows}
                            </tbody>

                        </table>

                    </div>
                ` : ""}

            </div>

        </div>

        <section class="product-description">

            <h2>Опис товару</h2>

            <p>
                ${product.description ||
                "Опис товару буде додано найближчим часом."}
            </p>

        </section>
    `;

    const mainImageElement =
        document.getElementById("product-main-image");

    const thumbnailsElements =
        document.querySelectorAll(".product-thumbnail");

    thumbnailsElements.forEach(thumbnail => {

        thumbnail.addEventListener("click", () => {

            if (!mainImageElement) return;

            mainImageElement.src =
                thumbnail.dataset.image;

            thumbnailsElements.forEach(item => {
                item.classList.remove("active");
            });

            thumbnail.classList.add("active");

        });

    });
}