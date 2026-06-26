"use strict";

/*
  編集ポイント 1:
  パスワードを変えたい場合は、SHA-256のハッシュ値にしてここへ入れてください。
  現在のパスワードは 0625 です。
  GitHub Pagesで動く静的サイトのため、これは強固な認証ではありません。
*/
const ALBUM_PASSWORD_HASH = "13c6f7d6022a155ce7e38d7485faf6830594bae46f2120dbe04c795ec4cc0e20";

/*
  編集ポイント 2:
  最初の画面にママの写真を出したい場合は、images フォルダに mama.jpg を入れてください。
  別名にしたい場合は、この HERO_PHOTO を "images/ファイル名.jpg" に変更します。
  写真が見つからない場合は、写真枠ごと自動で非表示になります。
*/
const HERO_PHOTO = "images/mama/mama.jpg";

/*
  編集ポイント 3:
  最後のメッセージ前に流す全体写真です。
  images フォルダに 全体1.jpg 〜 全体7.jpg を入れると、1から順に表示されます。
  png や jpeg にしたい場合は、下の拡張子だけ変更してください。
*/
const endingPhotos = [
  "images/group/全体1.jpg",
  "images/group/全体2.jpg",
  "images/group/全体3.jpg",
  "images/group/全体4.jpg",
  "images/group/全体5.jpg",
  "images/group/全体6.jpg",
  "images/group/全体7.jpg"
];

/*
  編集ポイント 4:
  メンバーの追加・削除・並び替え・写真・メッセージはこの配列だけ編集します。
  写真は images フォルダに入れ、"images/ファイル名.jpg" のように書いてください。
*/
const members = [
  {
    id: "member-01",
    name: "民生",
    message: `母さんお誕生日おめでとう！`,
    tone: "male",
    photos: ["images/members/民生/民生.jpg"]
  },
  {
    id: "member-02",
    name: "若葉",
    message: `ママお誕生日おめでとうございます㊗️

Instagramの投稿に綴らせて貰いましたが、
ふわふわ、ぱきぱき、しなしな。

どんなママからも沢山学ばせていただき、
飽きずここまで続けてこれました笑

51歳のママへの誕生日プレゼントは私の成長と、売上です\( ⍢ )/

イベント楽しんでまいりましょう
文章よりも行動で🔥`,
    photos: [
      "images/members/若葉/若葉.jpg",
      "images/members/若葉/若葉2.jpg"
    ]
  },
  {
    id: "member-03",
    name: "みな",
    message: `ママ51歳お誕生日おめでとうございます🎉

いつも愛に溢れてる、
人間味溢れるママの元で早5年目🥹

出会ってくださって本当にありがとうございます🙏

伝えたいことはたくさんありますが、詳細はまたお送りさせて頂きます💌

一言でいうと愛してます(*´³\`*) ㄘゅ💕

素敵な誕生日イベントにしましょうね🎂🎂`,
    photos: ["images/members/みな/みな.jpg"]
  },
  {
    id: "member-04",
    name: "ゆき",
    message: `ママへ

51歳のお誕生日おめでとうございます♡♡

これからもたくさんご指導よろしくお願いします♡

出会って2年、本当にあっという間でした💫

たくさん吸収して、これからも成長していきます！
ママみたいな素敵な女性になれるように！

続きは手紙💌に書きますね🌟
最高の誕生日イベントにしましょう❤️‍🔥`,
    photos: ["images/members/ゆき/ゆき.jpg"]
  },
  {
    id: "member-05",
    name: "俊太",
    message: `これからもてくてくしましょう
ハッピーバースデイ我らのママ`,
    tone: "male",
    photos: ["images/members/俊太/俊太.jpg"]
  },
  {
    id: "member-06",
    name: "ゆう",
    message: `いつもたくさんの愛を私たちに注いでくださり、ありがとうございます！

ママについてきたから、今の私があると思うし、
考え方や価値観みたいなものも成長できていると思ってます！

これからもずっと背中を追わせてください！
よろしくお願いします！

お誕生日おめでとうございます✨`,
    photos: ["images/members/ゆう/ゆう.jpg"]
  },
  {
    id: "member-07",
    name: "ななせ",
    message: `ママお誕生日おめでとうございます！！

いつも気にかけてくださって、ほんとにありがとうございます！

ママの大きな愛にいつも助けられています！
大好きです！`,
    photos: ["images/members/ななせ/ななせ.jpg"]
  },
  {
    id: "member-08",
    name: "さえ",
    message: `ママへ

お誕生日おめでとうございます♡㊗️
ママと出会って一年が経ちました🥲

この一年、他の女の子に比べて
とても手にかかった子だったと思うのに、
ずっと愛のある指導をしてくださりありがとうございます🤧

私の中でママは第二のママであり、
これからも私の尊敬する人です🥳
大好きです😘

これからもよろしくお願いいたします！🙇🏻‍♀️
さえより`,
    photos: ["images/members/さえ/さえ.jpg"]
  },
  {
    id: "member-09",
    name: "うた",
    message: `ママ　お誕生日おめでとうございます！🍰

いつも優しさに溢れた愛情に言葉❤️‍🔥
すごく尊敬してます🫡

まだまだ短い期間なのに、
たくさんの知恵や知識、所作を教えてくださって本当に感謝です🙏

これからもよろしくお願いします！
いつまでも変わらないママでいてください💖`,
    photos: ["images/members/うた/うた.jpg"]
  },
  {
    id: "member-10",
    name: "もも",
    message: `ママへ

お誕生日おめでとうございます！
いつも本当にありがとうございます🙏

ママの後ろ姿を見て成長していきます！！
これからもよろしくお願いします🙇‍♀️`,
    photos: ["images/members/もも/もも.jpg"]
  },
  {
    id: "member-11",
    name: "こうだい",
    message: `ママ

誕生日おめでとうございます！

これからもピュアな気持ちで働かせてもらいます‼
よろしくお願いします☺`,
    tone: "male",
    photos: ["images/members/こうだい/こうだい.jpg"]
  },
  {
    id: "member-12",
    name: "ちあき",
    message: `ママ、お誕生日おめでとうございます！🎂🎉💖

いつも本当にありがとうございます🙇‍♀️

入店してまだ2ヶ月ほどですが、ママにはたくさんお世話になっています。

ママは良いことも改善した方が良いこともはっきり伝えてくださるので、お話を聞くたびに学ぶことばかりです。
その度に自分自身ももっと頑張ろうと思えていますし、良い緊張感を持ちながらお仕事ができています✨

また、自分の足りない部分と向き合うきっかけもたくさんいただいています。

まだまだ分からないことも多く、難しいなと感じることもありますが、その分今まで知らなかったことを知ることができたり、新しい発見があったりと、毎回楽しく働かせていただいています☺️

面接に伺ったあの日、Pureの扉を開けて本当に良かったなと思っています🌷

ママをはじめ、Pureで出会えた皆さまとのご縁に感謝しながら、これからも一つひとつの出会いや経験を大切にしていきたいと思っています☺️

たくさんのことを学びながら、自分らしいキャラクターや強みを少しずつ見つけていけるよう頑張ります！✨

ママにとって笑顔と幸せがたくさん溢れる素敵な一年になりますように💐🤍

改めまして、お誕生日おめでとうございます🎂🎉💖
これからもどうぞよろしくお願いいたします✨`,
    photos: ["images/members/ちあき/ちあき.jpg"]
  },
  {
    id: "member-13",
    name: "なつ",
    message: `ママさん、お誕生日おめでとうございます🎵

いつも優しく明るく接してくださって、ありがとうございます😭❤️‍🔥

これからも明るいママさんでいてください！！

なつ`,
    photos: []
  },
  {
    id: "member-14",
    name: "めい",
    message: `ママ誕生日おめでとうございます🎂🎉

ピュアでもう一度働く機会をいただき、
いつも気にかけて面倒を見てくださり本当にありがとうございます！

これからもご迷惑おかけする事があるかもしれませんがよろしくお願いします！`,
    photos: ["images/members/めい/めい.jpg"]
  },
  {
    id: "member-15",
    name: "のん",
    message: `お誕生日おめでとうございます
今年も幸せな一年にしてください🍀`,
    photos: []
  },
  {
    id: "member-16",
    name: "みか",
    message: `ママへ

いつもパワフルなママを本当に尊敬してます♡

これからもよろしくお願いします！！
素敵な歳にしてください♡`,
    photos: ["images/members/みか/みか.jpg"]
  },
  {
    id: "member-17",
    name: "あお",
    message: `ママお誕生日おめでとうございます🎉

ママにとって幸せな一年になりますように🥰

ママ大好きです🫶🫶`,
    photos: ["images/members/あお/あお.jpg"]
  },
  {
    id: "member-18",
    name: "らん",
    message: `ママ💖
お誕生日おめでとうございます🎂

ママと出会って1年でもあり、
ほんとPuraで働けていて良かったなといつも思います。

ママの指導や、時には褒めてくださることが
なにより嬉しいです。

まだまだ未熟者ではありますが
もっとより一層大人な女性として
Puraで頑張っていきたいなと
思ってます
よろしくお願いします

ママつけてくれたあだ名の赤毛のらん気に入ってます🥰`,
    photos: ["images/members/らん/らん.jpg"]
  },
  {
    id: "member-19",
    name: "あむ",
    message: `お誕生日おめでとうございます！

まだ出勤日数が浅く、
今まであまりお話できる機会はなかったですが、
お客様とお話されている姿を拝見し、
ママが卓に着いている時のお客様は一段と楽しそうに過ごされていて、
私もママのように誰かを楽しませられるような人になりたいと思っています。

これからもよろしくお願いします♡`,
    photos: []
  },
  {
    id: "member-20",
    name: "えま",
    message: `お誕生日おめでとうございます🎉

いつも優しく見守ってくださってありがとうございます🙂‍↕️

ママが時には厳しく、
でも愛情を持ってマナーや考え方を教えてくださるおかげで、
私自身すごく勉強になっています。

上品で素敵なママの人柄や立ち振る舞いにはいつも憧れていて、
私も少しでも近づけるようになりたいなと思っています

まだまだ至らないところはありますが、これからもよろしくお願いします！`,
    photos: ["images/members/えま/えま.jpg"]
  }
];

/*
  注意:
  右クリック、ドラッグ、長押し保存を可能な範囲で抑止しています。
  ただし、スクリーンショットや開発者ツールによる閲覧は完全には防げません。
  このページはデータ送信を一切行わず、ブラウザ内だけで動作します。
*/
const LOCK_TIMEOUT_MS = 30 * 60 * 1000;
const AUTH_KEY = "privateBirthdayAlbumUnlockedAt";

const album = document.querySelector("#album");
const lockScreen = document.querySelector("#lockScreen");
const passwordForm = document.querySelector("#passwordForm");
const passwordInput = document.querySelector("#passwordInput");
const passwordError = document.querySelector("#passwordError");
const memberNav = document.querySelector("#memberNav");
const memberSections = document.querySelector("#memberSections");
const currentPerson = document.querySelector("#currentPerson");
const progressBar = document.querySelector("#progressBar");
const heroPhotoButton = document.querySelector("#heroPhotoButton");
const heroPhoto = document.querySelector("#heroPhoto");
const endingPhotoTrack = document.querySelector("#endingPhotoTrack");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const lightboxClose = document.querySelector("#lightboxClose");
const lightboxPrev = document.querySelector("#lightboxPrev");
const lightboxNext = document.querySelector("#lightboxNext");

let lightboxPhotos = [];
let lightboxIndex = 0;
let endingCelebrated = false;
let lockTimer = null;
let touchStartX = 0;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function hashText(value) {
  if (!window.crypto || !window.crypto.subtle) return "";
  const data = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function isPasswordCorrect(value) {
  return await hashText(value) === ALBUM_PASSWORD_HASH;
}

function getInitial(name) {
  return String(name || "?").trim().slice(0, 1) || "?";
}

function photoGridClass(count) {
  if (count === 1) return "count-1";
  if (count === 2) return "count-2";
  return "count-many";
}

function messageLengthClass(message) {
  const compactLength = String(message || "").replace(/\s/g, "").length;
  if (compactLength >= 230) return "message-long";
  if (compactLength >= 95) return "message-medium";
  return "message-short";
}

function photoCountClass(count) {
  if (count === 0) return "no-photos";
  if (count === 1) return "has-one-photo";
  if (count === 2) return "has-two-photos";
  return "has-many-photos";
}

function memberToneClass(member) {
  return member.tone === "male" ? "is-male" : "";
}

function renderAlbum() {
  memberNav.innerHTML = members.map((member, index) => `
    <a class="nav-card ${memberToneClass(member)}" href="#${escapeHtml(member.id)}" data-nav-id="${escapeHtml(member.id)}">
      <span>${escapeHtml(member.name)}</span>
      <small>${String(index + 1).padStart(2, "0")}</small>
    </a>
  `).join("");

  memberSections.innerHTML = members.map((member, index) => {
    const photos = Array.isArray(member.photos) ? member.photos : [];
    const layoutClass = [
      memberToneClass(member),
      photoCountClass(photos.length),
      messageLengthClass(member.message)
    ].join(" ");
    const photoHtml = photos.length > 0
      ? `<div class="photo-grid ${photoGridClass(photos.length)}">
          ${photos.map((photo, photoIndex) => `
            <button class="photo-button" type="button" data-member-index="${index}" data-photo-index="${photoIndex}" aria-label="${escapeHtml(member.name)}の写真${photoIndex + 1}を拡大">
              <img src="${escapeHtml(photo)}" alt="${escapeHtml(member.name)}の写真 ${photoIndex + 1}" loading="lazy" draggable="false">
            </button>
          `).join("")}
        </div>`
      : `<div class="empty-photo" aria-label="写真は後から追加できます">
          <div>
            <span>${escapeHtml(getInitial(member.name))}</span>
            写真は images フォルダへ追加できます
          </div>
        </div>`;

    return `
      <section id="${escapeHtml(member.id)}" class="member-section section-observe" data-title="${escapeHtml(member.name)}">
        <div class="member-wrap ${layoutClass} reveal">
          <header class="member-title">
            <p>Message ${String(index + 1).padStart(2, "0")}</p>
            <h2>${escapeHtml(member.name)}</h2>
          </header>
          <div class="member-body">
            ${photoHtml}
            <div class="message-box">
              <p>${escapeHtml(member.message)}</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }).join("");
}

function setupAdaptivePhotoLayouts() {
  document.querySelectorAll(".photo-button img").forEach((image) => {
    const button = image.closest(".photo-button");
    if (!button) return;

    const applyOrientation = () => {
      const width = image.naturalWidth;
      const height = image.naturalHeight;
      if (!width || !height) return;

      button.classList.remove("is-portrait", "is-landscape", "is-square");
      if (width > height * 1.18) {
        button.classList.add("is-landscape");
      } else if (height > width * 1.18) {
        button.classList.add("is-portrait");
      } else {
        button.classList.add("is-square");
      }
    };

    image.addEventListener("load", applyOrientation);
    image.addEventListener("error", () => {
      button.classList.add("is-missing");
    });

    if (image.complete) applyOrientation();
  });
}

function renderEndingPhotos() {
  if (!endingPhotoTrack) return;

  const photos = endingPhotos.filter(Boolean);
  if (!photos.length) {
    endingPhotoTrack.innerHTML = `
      <div class="ending-photo-empty">
        images フォルダへ全体写真を追加できます
      </div>
    `;
    return;
  }

  const loopPhotos = photos.concat(photos);
  endingPhotoTrack.innerHTML = `
    <div class="ending-photo-rail">
      ${loopPhotos.map((photo, index) => {
        const photoIndex = index % photos.length;
        return `
          <button class="ending-photo-button" type="button" data-ending-photo-index="${photoIndex}" aria-label="全体写真${photoIndex + 1}を拡大">
            <span class="ending-photo-placeholder">全体${photoIndex + 1}</span>
            <img src="${escapeHtml(photo)}" alt="全体写真 ${photoIndex + 1}" loading="lazy" draggable="false">
          </button>
        `;
      }).join("")}
    </div>
  `;

  endingPhotoTrack.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.closest(".ending-photo-button")?.classList.add("is-missing");
    });
  });
}

function setUnlocked(isUnlocked) {
  album.setAttribute("aria-hidden", String(!isUnlocked));
  lockScreen.classList.toggle("is-open", isUnlocked);
  if (isUnlocked) {
    sessionStorage.setItem(AUTH_KEY, String(Date.now()));
    resetLockTimer();
  } else {
    sessionStorage.removeItem(AUTH_KEY);
    window.scrollTo({ top: 0, behavior: "instant" });
    passwordInput.value = "";
    passwordInput.focus();
  }
}

function isSessionValid() {
  const unlockedAt = Number(sessionStorage.getItem(AUTH_KEY));
  return Number.isFinite(unlockedAt) && Date.now() - unlockedAt < LOCK_TIMEOUT_MS;
}

function resetLockTimer() {
  clearTimeout(lockTimer);
  if (album.getAttribute("aria-hidden") === "true") return;
  sessionStorage.setItem(AUTH_KEY, String(Date.now()));
  lockTimer = setTimeout(() => setUnlocked(false), LOCK_TIMEOUT_MS);
}

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable <= 0 ? 0 : (window.scrollY / scrollable) * 100;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function updateActiveNav(id, title) {
  currentPerson.textContent = title || "Opening";
  document.querySelectorAll(".nav-card").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.navId === id);
  });
}

function openLightbox(memberIndex, photoIndex) {
  const member = members[memberIndex];
  if (!member || !member.photos || !member.photos.length) return;
  lightboxPhotos = member.photos.map((src, index) => ({
    src,
    caption: `${member.name} / ${index + 1} of ${member.photos.length}`
  }));
  lightboxIndex = photoIndex;
  showLightboxPhoto();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function openEndingPhoto(photoIndex) {
  if (!endingPhotos.length) return;
  lightboxPhotos = endingPhotos.map((src, index) => ({
    src,
    caption: `みんなとの思い出 / ${index + 1} of ${endingPhotos.length}`
  }));
  lightboxIndex = photoIndex;
  showLightboxPhoto();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

function showLightboxPhoto() {
  const photo = lightboxPhotos[lightboxIndex];
  if (!photo) return;
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.caption;
  lightboxCaption.textContent = photo.caption;
}

function moveLightbox(step) {
  if (!lightboxPhotos.length) return;
  lightboxIndex = (lightboxIndex + step + lightboxPhotos.length) % lightboxPhotos.length;
  showLightboxPhoto();
}

function openStandalonePhoto(src, caption) {
  lightboxPhotos = [{ src, caption }];
  lightboxIndex = 0;
  showLightboxPhoto();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function setupHeroPhoto() {
  if (!heroPhotoButton || !heroPhoto || !HERO_PHOTO) return;

  heroPhoto.addEventListener("load", () => {
    heroPhotoButton.classList.add("is-ready");
  });

  heroPhoto.addEventListener("error", () => {
    heroPhotoButton.classList.remove("is-ready");
    heroPhoto.removeAttribute("src");
  });

  heroPhotoButton.addEventListener("click", () => {
    if (!heroPhotoButton.classList.contains("is-ready")) return;
    openStandalonePhoto(HERO_PHOTO, "ママ");
  });

  heroPhoto.src = HERO_PHOTO;
}

function celebrateEnding() {
  if (endingCelebrated) return;
  endingCelebrated = true;
  const colors = ["#ffc4d6", "#ff8fb8", "#f7ddb0", "#fff4f8", "#d8b462"];
  for (let i = 0; i < 42; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty("--fall-x", `${(Math.random() - 0.5) * 44}vw`);
    piece.style.animationDelay = `${Math.random() * 0.9}s`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5400);
  }
}

function setupObservers() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const title = entry.target.dataset.title;
      updateActiveNav(entry.target.id, title);
      if (entry.target.id === "ending") celebrateEnding();
    });
  }, {
    rootMargin: "-38% 0px -45% 0px",
    threshold: 0.01
  });

  document.querySelectorAll(".section-observe").forEach((section) => sectionObserver.observe(section));
}

function bindEvents() {
  passwordForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (await isPasswordCorrect(passwordInput.value)) {
      passwordError.textContent = "";
      setUnlocked(true);
      return;
    }
    passwordError.textContent = "パスワードが違います。";
  });

  document.addEventListener("click", (event) => {
    const photoButton = event.target.closest(".photo-button");
    if (!photoButton) return;
    openLightbox(Number(photoButton.dataset.memberIndex), Number(photoButton.dataset.photoIndex));
  });

  document.addEventListener("click", (event) => {
    const endingPhotoButton = event.target.closest(".ending-photo-button");
    if (!endingPhotoButton) return;
    if (endingPhotoButton.classList.contains("is-missing")) return;
    openEndingPhoto(Number(endingPhotoButton.dataset.endingPhotoIndex));
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => moveLightbox(-1));
  lightboxNext.addEventListener("click", () => moveLightbox(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  lightbox.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener("touchend", (event) => {
    const diff = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) < 40) return;
    moveLightbox(diff > 0 ? -1 : 1);
  }, { passive: true });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  ["click", "touchstart", "keydown", "scroll"].forEach((eventName) => {
    document.addEventListener(eventName, resetLockTimer, { passive: true });
  });

  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("dragstart", (event) => event.preventDefault());
}

renderAlbum();
renderEndingPhotos();
setupAdaptivePhotoLayouts();
bindEvents();
setupHeroPhoto();
setupObservers();
updateProgress();

if (isSessionValid()) {
  setUnlocked(true);
} else {
  setUnlocked(false);
}
