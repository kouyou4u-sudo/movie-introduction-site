const movies = [
  {
    id: 1,
    title: "ショーシャンクの空に",
    year: 1994,
    genre: "感動",
    director: "監督: フランク・ダラボン",
    catch: "希望は、閉ざされた場所でも消えない。",
    description: "無実の罪で投獄された銀行員アンディが、過酷な刑務所生活の中で友情と希望をつなぎ続けるヒューマンドラマ。",
    point: "静かな積み重ねがラストの解放感につながる、王道にして圧倒的な名作。",
    tags: ["泣ける", "人生", "名作"],
    rating: 4.9,
    rank: 1,
    moods: ["泣きたい"],
    palette: "linear-gradient(135deg, rgba(216, 179, 106, 0.30), rgba(36, 24, 18, 0.88))"
  },
  {
    id: 2,
    title: "フォレスト・ガンプ／一期一会",
    year: 1994,
    genre: "感動",
    director: "監督: ロバート・ゼメキス",
    catch: "まっすぐ生きることが、誰かの心を動かしていく。",
    description: "純粋な心を持つフォレストが、激動の時代を駆け抜けながら多くの人の人生と交差していく物語。",
    point: "人生の喜びと切なさを同時に味わえる、親しみやすく深い一本。",
    tags: ["温かい", "人生", "初心者向け"],
    rating: 4.8,
    rank: 4,
    moods: ["泣きたい"],
    palette: "linear-gradient(135deg, rgba(150, 182, 208, 0.26), rgba(24, 30, 42, 0.88))"
  },
  {
    id: 3,
    title: "最強のふたり",
    year: 2011,
    genre: "感動",
    director: "監督: エリック・トレダノ&オリヴィエ・ナカシュ",
    catch: "まったく違う二人が、人生を鮮やかに変えていく。",
    description: "事故で首から下が動かなくなった富豪と、介護役になった自由奔放な青年の交流を描く実話ベースのドラマ。",
    point: "笑えて泣けて前向きになれる、感動作の入口としても優秀。",
    tags: ["友情", "前向き", "実話ベース"],
    rating: 4.7,
    rank: 6,
    moods: ["泣きたい", "スカッとしたい"],
    palette: "linear-gradient(135deg, rgba(196, 96, 84, 0.24), rgba(26, 22, 34, 0.88))"
  },
  {
    id: 4,
    title: "マッドマックス 怒りのデス・ロード",
    year: 2015,
    genre: "アクション",
    director: "監督: ジョージ・ミラー",
    catch: "怒濤の追走劇が、世界の温度を一気に上げる。",
    description: "荒廃した砂漠世界で、支配者から逃れる女性たちとマックスが命懸けの逃走を繰り広げる。",
    point: "冒頭から最後まで失速しない、圧巻の体感型アクション。",
    tags: ["スカッと", "爆走", "映像体験"],
    rating: 4.8,
    rank: 2,
    moods: ["スカッとしたい", "ハラハラしたい"],
    palette: "linear-gradient(135deg, rgba(184, 66, 69, 0.42), rgba(48, 18, 10, 0.92))"
  },
  {
    id: 5,
    title: "ダークナイト",
    year: 2008,
    genre: "アクション",
    director: "監督: クリストファー・ノーラン",
    catch: "正義が試される夜、街は静かに狂い始める。",
    description: "ゴッサム・シティを守るバットマンが、秩序そのものを壊そうとするジョーカーと対峙するダークヒーロー映画。",
    point: "アクションでありながら、倫理と混沌を突き詰めた重厚さが魅力。",
    tags: ["重厚", "緊張感", "名作"],
    rating: 4.9,
    rank: 3,
    moods: ["スカッとしたい", "ハラハラしたい"],
    palette: "linear-gradient(135deg, rgba(90, 102, 129, 0.28), rgba(9, 12, 18, 0.94))"
  },
  {
    id: 6,
    title: "ミッション:インポッシブル／フォールアウト",
    year: 2018,
    genre: "アクション",
    director: "監督: クリストファー・マッカリー",
    catch: "止まる暇を与えない、極上のスパイアクション。",
    description: "核兵器をめぐる危機を阻止するため、イーサン・ハントが世界各地で不可能任務に挑む。",
    point: "陸海空の見せ場がそろった、シリーズ屈指の完成度。",
    tags: ["スパイ", "爽快", "初心者向け"],
    rating: 4.7,
    rank: 0,
    moods: ["スカッとしたい"],
    palette: "linear-gradient(135deg, rgba(216, 179, 106, 0.20), rgba(32, 10, 16, 0.92))"
  },
  {
    id: 7,
    title: "インターステラー",
    year: 2014,
    genre: "SF",
    director: "監督: クリストファー・ノーラン",
    catch: "宇宙の果てで試されるのは、科学と愛だった。",
    description: "地球の危機を前に、新たな居住可能惑星を探す探査ミッションに向かった父と娘の物語を描くSF大作。",
    point: "宇宙のスケール感と個人的な感情が見事に同居する傑作。",
    tags: ["宇宙", "映像美", "余韻"],
    rating: 4.9,
    rank: 5,
    moods: ["不思議な世界に入りたい", "泣きたい"],
    palette: "linear-gradient(135deg, rgba(88, 111, 241, 0.28), rgba(7, 12, 28, 0.92))"
  },
  {
    id: 8,
    title: "ブレードランナー 2049",
    year: 2017,
    genre: "SF",
    director: "監督: ドゥニ・ヴィルヌーヴ",
    catch: "静かな未来都市に、孤独と真実が降り積もる。",
    description: "レプリカント捜査官Kが、世界の均衡を揺るがす秘密に近づいていく近未来SF。",
    point: "圧倒的な映像美と、乾いた孤独感に浸れる大人向けSF。",
    tags: ["サイバー", "映像美", "大人向け"],
    rating: 4.7,
    rank: 0,
    moods: ["不思議な世界に入りたい"],
    palette: "linear-gradient(135deg, rgba(214, 126, 56, 0.24), rgba(18, 18, 30, 0.92))"
  },
  {
    id: 9,
    title: "メッセージ",
    year: 2016,
    genre: "SF",
    director: "監督: ドゥニ・ヴィルヌーヴ",
    catch: "ことばは、世界の見え方そのものを変える。",
    description: "突如現れた宇宙船と交信するため、言語学者が未知の存在とのコミュニケーションに挑むSFドラマ。",
    point: "派手さよりも発想で魅せる、知的で感情的な一本。",
    tags: ["知的", "静かな衝撃", "余韻"],
    rating: 4.6,
    rank: 0,
    moods: ["不思議な世界に入りたい", "泣きたい"],
    palette: "linear-gradient(135deg, rgba(178, 190, 255, 0.22), rgba(15, 22, 38, 0.92))"
  },
  {
    id: 10,
    title: "セブン",
    year: 1995,
    genre: "サスペンス",
    director: "監督: デヴィッド・フィンチャー",
    catch: "雨の街で進む捜査は、やがて深い闇へ落ちていく。",
    description: "七つの大罪を模した連続殺人事件を追う二人の刑事が、狂気に満ちた犯人像へ迫っていく。",
    point: "ラストの衝撃まで含めて、サスペンス映画の基準になる一本。",
    tags: ["どんでん返し", "重い", "緊張感"],
    rating: 4.8,
    rank: 0,
    moods: ["ハラハラしたい"],
    palette: "linear-gradient(135deg, rgba(65, 80, 110, 0.28), rgba(12, 14, 20, 0.94))"
  },
  {
    id: 11,
    title: "ゴーン・ガール",
    year: 2014,
    genre: "サスペンス",
    director: "監督: デヴィッド・フィンチャー",
    catch: "理想の夫婦像ほど、信用できない。",
    description: "失踪した妻の事件をきっかけに、夫婦の歪んだ本性とメディアの暴走が浮かび上がるサスペンス。",
    point: "登場人物の見え方が何度も反転する、現代的で鋭い一本。",
    tags: ["心理戦", "どんでん返し", "会話劇"],
    rating: 4.7,
    rank: 0,
    moods: ["ハラハラしたい"],
    palette: "linear-gradient(135deg, rgba(124, 126, 148, 0.22), rgba(14, 17, 28, 0.94))"
  },
  {
    id: 12,
    title: "羊たちの沈黙",
    year: 1991,
    genre: "サスペンス",
    director: "監督: ジョナサン・デミ",
    catch: "沈黙の奥にある知性が、いちばん恐ろしい。",
    description: "若き訓練生クラリスが、猟奇殺人犯を追うため、収監中の天才精神科医レクター博士に協力を求める。",
    point: "張り詰めた対話と心理戦の緊張感が今なお圧倒的。",
    tags: ["心理戦", "名作", "上級者向け"],
    rating: 4.8,
    rank: 0,
    moods: ["ハラハラしたい"],
    palette: "linear-gradient(135deg, rgba(184, 66, 69, 0.20), rgba(20, 14, 18, 0.94))"
  },
  {
    id: 13,
    title: "ラ・ラ・ランド",
    year: 2016,
    genre: "恋愛",
    director: "監督: デイミアン・チャゼル",
    catch: "夢を追う二人の光は、美しくすれ違っていく。",
    description: "ロサンゼルスで夢を追う女優志望のミアとジャズピアニストのセブが、恋と現実の狭間で揺れるミュージカル映画。",
    point: "華やかさの裏にあるほろ苦さまで含めて、恋愛映画として完成度が高い。",
    tags: ["ロマンチック", "音楽", "余韻"],
    rating: 4.8,
    rank: 0,
    moods: ["恋に浸りたい"],
    palette: "linear-gradient(135deg, rgba(183, 94, 130, 0.28), rgba(28, 14, 25, 0.90))"
  },
  {
    id: 14,
    title: "ビフォア・サンライズ 恋人までの距離",
    year: 1995,
    genre: "恋愛",
    director: "監督: リチャード・リンクレイター",
    catch: "一夜の会話だけで、心はここまで近づける。",
    description: "列車で偶然出会った男女が、ウィーンの街を歩きながら朝まで語り合うロマンス映画。",
    point: "大きな事件は起きないのに、会話だけで恋に落ちる感覚を味わえる。",
    tags: ["会話劇", "しっとり", "大人向け"],
    rating: 4.6,
    rank: 0,
    moods: ["恋に浸りたい"],
    palette: "linear-gradient(135deg, rgba(216, 179, 106, 0.18), rgba(56, 20, 40, 0.90))"
  },
  {
    id: 15,
    title: "花束みたいな恋をした",
    year: 2021,
    genre: "恋愛",
    director: "監督: 土井裕泰",
    catch: "好きだけでは続かない現実が、静かに胸に刺さる。",
    description: "偶然の出会いから恋人になった二人が、同じものを愛しながら少しずつすれ違っていく現代恋愛ドラマ。",
    point: "今っぽいリアルさと痛みがあり、共感しながら深く刺さる。",
    tags: ["切ない", "リアル", "共感"],
    rating: 4.7,
    rank: 0,
    moods: ["恋に浸りたい", "泣きたい"],
    palette: "linear-gradient(135deg, rgba(81, 130, 184, 0.24), rgba(17, 21, 39, 0.92))"
  },
  {
    id: 16,
    title: "千と千尋の神隠し",
    year: 2001,
    genre: "アニメ",
    director: "監督: 宮崎駿",
    catch: "異界を抜ける旅のなかで、少女は自分の名を取り戻す。",
    description: "不思議な町に迷い込んだ千尋が、両親を救うために湯屋で働きながら成長していくアニメ映画。",
    point: "世界観、キャラクター、寓話性のすべてが高水準の日本アニメ史に残る名作。",
    tags: ["ファンタジー", "名作", "世界観"],
    rating: 4.9,
    rank: 0,
    moods: ["不思議な世界に入りたい", "泣きたい"],
    palette: "linear-gradient(135deg, rgba(102, 173, 133, 0.30), rgba(14, 22, 25, 0.90))"
  },
  {
    id: 17,
    title: "君の名は。",
    year: 2016,
    genre: "アニメ",
    director: "監督: 新海誠",
    catch: "出会う前から、誰かを探している。",
    description: "都会に暮らす少年と田舎町の少女が、夢の中で入れ替わる奇妙な体験を通して結びついていく。",
    point: "映像美とエモーションの強さが直感的で、幅広い人に届きやすい一本。",
    tags: ["映像美", "青春", "泣ける"],
    rating: 4.7,
    rank: 0,
    moods: ["不思議な世界に入りたい", "恋に浸りたい"],
    palette: "linear-gradient(135deg, rgba(100, 156, 255, 0.26), rgba(20, 28, 60, 0.92))"
  },
  {
    id: 18,
    title: "リメンバー・ミー",
    year: 2017,
    genre: "アニメ",
    director: "監督: リー・アンクリッチ",
    catch: "音楽は、忘れられた想いまで連れて帰ってくる。",
    description: "音楽を愛する少年ミゲルが死者の国へ迷い込み、家族に隠された記憶と向き合うピクサー作品。",
    point: "鮮やかな世界観の楽しさと、家族の感動がしっかり両立している。",
    tags: ["家族", "泣ける", "色彩"],
    rating: 4.8,
    rank: 0,
    moods: ["泣きたい", "不思議な世界に入りたい"],
    palette: "linear-gradient(135deg, rgba(255, 165, 106, 0.28), rgba(30, 22, 34, 0.90))"
  }
];

const genreMeta = {
  "感動": {
    lead: "長く愛される名作を中心に、心の奥まで届くヒューマンドラマを集めました。涙と余韻を味わいたい夜におすすめです。",
    mood: "Emotion",
    background: "linear-gradient(135deg, rgba(216, 179, 106, 0.1), rgba(184, 66, 69, 0.06))"
  },
  "アクション": {
    lead: "体感するように楽しめる迫力重視の作品をセレクト。テンションを上げたいときにぴったりです。",
    mood: "Impulse",
    background: "linear-gradient(135deg, rgba(184, 66, 69, 0.13), rgba(216, 179, 106, 0.05))"
  },
  "SF": {
    lead: "宇宙、未来、言語、記憶。想像力を刺激しながら、人間ドラマとしても深いSF作品をそろえました。",
    mood: "Future",
    background: "linear-gradient(135deg, rgba(76, 112, 216, 0.13), rgba(143, 82, 201, 0.06))"
  },
  "サスペンス": {
    lead: "先が読めない緊張感と、観終わったあとまで残る不穏さが魅力の名作を集めています。",
    mood: "Tension",
    background: "linear-gradient(135deg, rgba(115, 125, 148, 0.12), rgba(184, 66, 69, 0.05))"
  },
  "恋愛": {
    lead: "高揚感だけでなく、余韻や切なさまで美しい恋愛映画を中心に選びました。夜更けに似合うセクションです。",
    mood: "Romance",
    background: "linear-gradient(135deg, rgba(183, 94, 130, 0.13), rgba(216, 179, 106, 0.05))"
  },
  "アニメ": {
    lead: "世界観の強さと感情の動きが共存する、映像体験としても魅力的なアニメ映画を紹介します。",
    mood: "Wonder",
    background: "linear-gradient(135deg, rgba(102, 173, 133, 0.13), rgba(216, 179, 106, 0.05))"
  }
};

const moodMeta = {
  "泣きたい": "心をほどいてくれる映画",
  "スカッとしたい": "勢いよく気分を上げる映画",
  "ハラハラしたい": "緊張感に没入できる映画",
  "恋に浸りたい": "余韻まで美しいロマンス映画",
  "不思議な世界に入りたい": "世界観に飲み込まれる映画"
};

const genreOrder = ["感動", "アクション", "SF", "サスペンス", "恋愛", "アニメ"];
const moodOrder = Object.keys(moodMeta);

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const globalNav = document.querySelector(".global-nav");
const rankingGrid = document.getElementById("ranking-grid");
const genreChipGrid = document.getElementById("genre-chip-grid");
const genreSectionsContainer = document.getElementById("genre-sections-container");
const moodControls = document.getElementById("mood-controls");
const moodTitle = document.getElementById("mood-title");
const moodLabel = document.getElementById("mood-label");
const moodResultGrid = document.getElementById("mood-result-grid");

function renderGenreChips() {
  genreChipGrid.innerHTML = genreOrder
    .map(
      (genre) => `
        <a class="genre-chip" href="#genre-${genre}">
          <strong>${genre}</strong>
          <span>${genreMeta[genre].mood}</span>
        </a>
      `
    )
    .join("");
}

function renderRanking() {
  const ranked = movies
    .filter((movie) => movie.rank > 0)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 6);

  rankingGrid.innerHTML = ranked
    .map(
      (movie) => `
        <article class="ranking-card">
          <div class="ranking-card-top">
            <div class="ranking-badge">#${movie.rank}</div>
            <div class="rating-pill">★ ${movie.rating.toFixed(1)}</div>
          </div>
          <h3 class="ranking-title">${movie.title}</h3>
          <div class="meta-line">
            <span>${movie.year}</span>
            <span>•</span>
            <span>${movie.genre}</span>
          </div>
          <p class="catch-line">${movie.catch}</p>
          <p>${movie.description}</p>
          <div class="point-box">
            <strong>おすすめポイント</strong>
            <p>${movie.point}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGenreSections() {
  genreSectionsContainer.innerHTML = genreOrder
    .map((genre) => {
      const genreMovies = movies.filter((movie) => movie.genre === genre);
      return `
        <section
          class="genre-block"
          id="genre-${genre}"
          style="--genre-background: ${genreMeta[genre].background};"
        >
          <div class="genre-block-header">
            <div class="genre-block-title">
              <p class="eyebrow">${genreMeta[genre].mood}</p>
              <h3>${genre}</h3>
              <p>${genreMeta[genre].lead}</p>
            </div>
            <span class="genre-pill">${genreMovies.length} titles</span>
          </div>
          <div class="genre-card-grid">
            ${genreMovies
              .map(
                (movie) => `
                  <article class="movie-card">
                    <div class="poster-placeholder" style="--card-background: ${movie.palette};">
                      <div class="poster-copy">
                        <span>${movie.genre} / ${movie.year}</span>
                        <strong>${movie.title}</strong>
                      </div>
                    </div>
                    <h4>${movie.title}</h4>
                    <div class="meta-line">
                      <span>${movie.year}</span>
                      <span>•</span>
                      <span>${movie.genre}</span>
                    </div>
                    <p class="catch-line">${movie.director}</p>
                    <p>${movie.description}</p>
                    <div class="point-box">
                      <strong>おすすめポイント</strong>
                      <p>${movie.point}</p>
                    </div>
                    <div class="card-tags">
                      ${movie.tags.map((tag) => `<span>${tag}</span>`).join("")}
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderMoodControls() {
  moodControls.innerHTML = moodOrder
    .map(
      (mood, index) => `
        <button
          class="mood-button ${index === 0 ? "is-active" : ""}"
          type="button"
          data-mood="${mood}"
          role="tab"
          aria-selected="${index === 0 ? "true" : "false"}"
        >
          ${mood}
        </button>
      `
    )
    .join("");
}

function renderMoodResults(mood) {
  const selected = movies.filter((movie) => movie.moods.includes(mood)).slice(0, 3);
  moodLabel.textContent = mood;
  moodTitle.textContent = moodMeta[mood];

  moodResultGrid.innerHTML = selected
    .map(
      (movie) => `
        <article class="mood-card">
          <div class="meta-line">
            <span>${movie.genre}</span>
            <span>•</span>
            <span>★ ${movie.rating.toFixed(1)}</span>
          </div>
          <h4>${movie.title}</h4>
          <p class="catch-line">${movie.catch}</p>
          <p>${movie.point}</p>
          <div class="card-tags">
            ${movie.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function handleMoodSwitch(event) {
  const button = event.target.closest(".mood-button");
  if (!button) {
    return;
  }

  const mood = button.dataset.mood;
  document.querySelectorAll(".mood-button").forEach((item) => {
    const isActive = item === button;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });

  renderMoodResults(mood);
}

function handleHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function setupMenu() {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    globalNav.classList.toggle("is-open", !expanded);
  });

  globalNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      globalNav.classList.remove("is-open");
    });
  });
}

function setupSmoothScrollOffset() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  });
}

function setupReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${index * 120}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.25 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

function init() {
  renderGenreChips();
  renderRanking();
  renderGenreSections();
  renderMoodControls();
  renderMoodResults(moodOrder[0]);
  setupMenu();
  setupSmoothScrollOffset();
  setupReveal();
  handleHeaderState();

  moodControls.addEventListener("click", handleMoodSwitch);
  window.addEventListener("scroll", handleHeaderState, { passive: true });
}

document.addEventListener("DOMContentLoaded", init);
