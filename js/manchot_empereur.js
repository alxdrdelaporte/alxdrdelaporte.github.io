document.getElementById('submitBtn').addEventListener('click', function() {
  const textInput = document.getElementById('textInput').value.trim();
  const checkInput = document.getElementById('checkInput').checked;

  if (textInput === "J'aime les manchots empereurs !" && checkInput) {
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('button-container').classList.remove('hidden');
  } else {
    alert("Prouvez que vous êtes vraiment fan des manchots empereurs !");
  }
});

const langData = {
  "français": {titre: "Manchot empereur", texte: "Le Manchot empereur (Aptenodytes forsteri) est un oiseau endémique de l'Antarctique, et le plus grand et le plus lourd de tous les manchots. Le mâle et la femelle ont un plumage similaire et sont de même taille, atteignant jusqu'à 122 cm de hauteur pour une masse qui varie entre 20 et 40 kg. Le dos et la tête sont noirs et le ventre blanc, le haut de la poitrine jaune clair ; deux marques jaune vif au niveau des oreilles sont très visibles. Comme les autres manchots, il est incapable de voler. Ses ailes raides et aplaties et son corps profilé sont particulièrement adaptés à l'habitat marin.", source: "https://fr.wikipedia.org/wiki/Manchot_empereur", licence: "CC BY-SA 4.0"},
  "anglais": {titre: "Emperor penguin", texte: "The emperor penguin (Aptenodytes forsteri) is the tallest and heaviest of all living penguin species and is endemic to Antarctica. The male and female are similar in plumage and size, reaching 100 cm (39 in) in length and weighing from 22 to 45 kg (49 to 99 lb). Feathers of the head and back are black and sharply delineated from the white belly, pale-yellow breast and bright-yellow ear patches.", source: "https://en.wikipedia.org/wiki/Emperor_penguin", licence: "CC BY-SA 4.0"},
  "portugais": {titre: "Pinguim-imperador", texte: "Pinguim-imperador (Aptenodytes forsteri) é a maior ave da família Spheniscidae (pinguins). Os adultos podem medir até 1,22 metros de altura e pesar até 37 kg. Os machos desta espécie são um dos poucos animais que passam o inverno na Antártida.", source: "https://pt.wikipedia.org/wiki/Pinguim-imperador", licence: "CC BY-SA 4.0"},
  "chinois": {titre: "皇帝企鹅", texte: "帝企鹅（台湾作皇帝企鵝，学名：Aptenodytes forsteri）是企鹅科中体型最大的物种，成年帝企鹅身高可达120公分，体重可达46公斤。在帝企鹅发现之前，有一种企鹅被认为是最大的企鹅，取名为王企鹅。后来，在南极大陆沿海帝企鹅被发现，由于它比王企鹅还高大，因此命名为帝企鹅。", source: "https://zh.wikipedia.org/wiki/%E7%9A%87%E5%B8%9D%E4%BC%81%E9%B9%85", licence: "CC BY-SA 4.0"},
  "japonais": {titre: "コウテイペンギン", texte: "コウテイペンギン (皇帝企鵝、学名：Aptenodytes forsteri) は、鳥綱ペンギン目ペンギン科オウサマペンギン属に分類される鳥類。別名はエンペラーペンギンである。", source: "https://ja.wikipedia.org/wiki/%E3%82%B3%E3%82%A6%E3%83%86%E3%82%A4%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3", licence: "CC BY-SA 4.0"},
  "coréen": {titre: "황제펭귄", texte: "황제펭귄(Aptenodytes forsteri)은 지구상에 생존하는 모든 펭귄들 중에서 가장 키가 크고 체중이 많이 나가는 종이다. 서식지는 남극과 포클랜드 제도이다. 암컷과 수컷은 덩치와 깃털 무늬가 비슷하며, 성체는 최고 120센티미터에 몸무게는 23~45킬로그램까지 나간다. 등은 검고 가슴 부위는 창백한 노란색을 띠고 있으며 귀 부위는 밝은 노란색이다. 다른 펭귄들과 마찬가지로 황제펭귄은 날지 못한다. 이들은 해양 생활에 적합한 유선형의 몸매와 플리퍼(flipper)로 불리는 납작한 날개를 갖고 있다.", source: "https://ko.wikipedia.org/wiki/%ED%99%A9%EC%A0%9C%ED%8E%AD%EA%B7%84", licence: "CC BY-SA 4.0"},
  "vietnamien": {titre: "Cánh cụt hoàng đế", texte: "Chim cánh cụt hoàng đế (tên khoa học Aptenodytes forsteri) là một loài chim trong họ Spheniscidae. Chúng là loại chim lớn nhất và nặng nhất trong số tất cả những loài chim cánh cụt sống và đặc hữu ở Châu Nam Cực. Con trống và con mái có bộ lông và kích thước tương tự nhau, chiều cao đạt tới 122 cm (48 in) và cân nặng từ 22 đến 45 kg (49 đến 99 lb). Đầu và lưng chúng màu đen, bụng và chân màu trắng, ngực màu vàng nhạt và tai màu vàng tươi. Cơ thể thuôn dài. Chim cánh cụt không biết bay, có đôi cánh nhỏ và dẹt cùng chân chèo thích nghi với môi trường nước.", source: "https://vi.wikipedia.org/wiki/C%C3%A1nh_c%E1%BB%A5t_ho%C3%A0ng_%C4%91%E1%BA%BF", licence: "CC BY-SA 4.0"},
  "thaï": {titre: "เพนกวินจักรพรรดิ", texte: "เพนกวินจักรพรรดิ (อังกฤษ: Emperor Penguin) เป็นเพนกวินที่มีขนาดใหญ่ที่สุดในบรรดาสปีชีส์ต่างๆ ที่มีถิ่นฐานอยู่ในทวีปแอนตาร์กติกา ตัวผู้และตัวเมียมีสีขนและขนาดใกล้เคียงกัน สูงราว 122 ซm (48 in) และหนักระหว่าง 22–37 กิโลกรัม (48–82 ปอนด์) ขนด้านหลังสีดำตัดกันกับขนด้านหน้าตรงบริเวณท้องที่มีสีขาว อกตอนบนสีเหลืองอ่อนและค่อยๆ ไล่ลงมาจนเป็นสีขาว และบริเวณหูเป็นสีเหลืองจัด เพนกวินจักรพรรดิก็เป็นเช่นเดียวกันกับเพนกวินชนิดอื่นที่เป็นนกที่บินไม่ได้ แต่มีรูปร่างที่เพรียวและปีกที่ลู่ตามตัวแต่แข็งแบนเหมือนครีบที่เหมาะกับการเป็นสัตว์น้ำมากกว่าที่จะเป็นนก", source: "https://th.wikipedia.org/wiki/%E0%B9%80%E0%B8%9E%E0%B8%99%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%99%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%94%E0%B8%B4", licence: "CC BY-SA 4.0"}
};

const buttons = document.querySelectorAll('#button-container button');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const buttonLang = this.getAttribute('lang');
    const data = langData[buttonLang];

    if (data) {
      alert(`${data.titre}\n\n${data.texte}\n\nSource : ${data.source}\n\nSous licence ${data.licence}`);
    } else {
      alert("Oups ! Pas de texte disponible pour cette langue.\nTentez un autre bouton.");
    }
  });
});