/* ============================================
   main.js — renders the card list from NFT_COLLECTION
   ============================================ */

/** Builds a single card element from a data object */
function createCard(nft, index) {
  const card = document.createElement("article");
  card.className = "nft-card animate__animated animate__fadeInUp";
  card.style.animationDelay = `${index * 110}ms`;

  card.innerHTML = `
    <div class="nft-card__media">
      <img
        class="nft-card__image"
        src="${nft.image}"
        alt="${nft.title} artwork"
        loading="lazy"
      />
      <div class="nft-card__aura" aria-hidden="true"></div>
      <div class="nft-card__overlay" aria-hidden="true">${ICONS.eye}</div>
    </div>

    <div class="nft-card__body">
      <ul class="nft-card__badges">
        <li class="nft-card__badge" title="Ethereum">${ICONS.ethereum}</li>
        <li class="nft-card__badge nft-card__badge--diamond" title="Rarity">${ICONS.diamond}</li>
      </ul>

      <p class="nft-card__collection">${nft.collection}</p>
      <h2 class="nft-card__title">${nft.title}</h2>

      <p class="nft-card__description">${nft.description}</p>

      <footer class="nft-card__footer">
        <div class="nft-card__owner">
          <img
            class="nft-card__avatar"
            src="${nft.owner.avatar}"
            alt="${nft.owner.name} avatar"
            loading="lazy"
          />
          <span class="nft-card__owner-name">${nft.owner.name}</span>
        </div>

        <div class="nft-card__bid">
          <span class="nft-card__price">${nft.price} ${nft.currency}</span>
        </div>
      </footer>
    </div>
  `;

  return card;
}

/** Renders every card into #cardlist */
function renderCollection() {
  const grid = document.getElementById("cardlist");
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  NFT_COLLECTION.forEach((nft, index) => fragment.appendChild(createCard(nft, index)));
  grid.appendChild(fragment);

  const counter = document.getElementById("cardlist-count");
  if (counter) counter.textContent = NFT_COLLECTION.length;
}

document.addEventListener("DOMContentLoaded", renderCollection);