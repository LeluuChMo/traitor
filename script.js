document.addEventListener("DOMContentLoaded", function () {
  const people = [
    { name: "გიორგი ბარვენაშვილი", image: "monebi/გიორგი ბარვენაშვილი.jpeg" },
    { name: "გია ბენაშვილი", image: "monebi/გია ბენაშვილი.jpg" },
    { name: "რიმა ბერაძე", image: "monebi/რამინა (რიმა) ბერაძე.jpg" },
    { name: "მაია ბითაძე", image: "monebi/მაია ბითაძე.jpg" },
    { name: "ანზორ ბოლქვაძე", image: "monebi/ანზორ ბოლქვაძე.jpg" },
    { name: "ელისო ბოლქვაძე", image: "monebi/ელისო ბოლქვაძე.jpeg" },
    { name: "მაკა ბოჭორიშვილი", image: "monebi/მაკა ბოჭორიშვილი.png" },
    { name: "ელგუჯა გოცირიძე", image: "monebi/ელგუჯა გოცირიძე.jpg" },
    { name: "ბექა დავითულიანი", image: "monebi/ბექა დავითულიანი.jpg" },
    {
      name: "ალექსანდრე დალაქიშვილი",
      image: "monebi/ალექსანდრე დალაქიშვილი.jpg",
    },
    { name: "ზაურ დარგალი", image: "monebi/ზაურ დარგალი.jpg" },
    { name: "ისკო დასენი", image: "monebi/ისკო დასენი.jpg" },
    { name: "ზაალ დუგლაძე", image: "monebi/ზაალ დუგლაძე.jpg" },
    { name: "გოჩა ენუქიძე", image: "monebi/გოჩა-ენუქიძე.jpg" },
    { name: "გია ვოლსკი", image: "monebi/გია ვოლსკი.jpg" },
    { name: "ირმა ზავრადაშვილი", image: "monebi/ირმა ზავრადაშვილი.jpg" },
    { name: "ირაკლი ზარქუა", image: "monebi/ირაკლი ზარქუა.jpg" },
    { name: "არჩილ თალაკვაძე", image: "monebi/არჩილ თალაკვაძე.jpg" },
    { name: "ედიშერ თოლორაია", image: "monebi/ედიშერ თოლორაია.jpg" },
    { name: "რატი იონათამიშვილი", image: "monebi/რატი იონათამიშვილი.jpg" },
    { name: "ლადო კახაძე", image: "monebi/ლადო კახაძე.jpg" },
    { name: "გიორგი კახიანი", image: "monebi/გიორგი კახიანი.jpeg" },
    { name: "კახა კახიშვილი", image: "monebi/კახა კახიშვილი.jpg" },
    { name: "პაატა კვიჟინაძე", image: "monebi/პაატა კვიჟინაძე.png" },
    { name: "ბაია კვიციანი", image: "monebi/ბაია კვიციანი.jpg" },
    { name: "ირაკლი კირცხალია", image: "monebi/ირაკლი კირცხალია.jpg" },
    { name: "სუმბატ კიურეღიანი", image: "monebi/სუმბატ კიურეღიან.jpg" },
    { name: "ლევან კობიაშვილი", image: "monebi/ლევან კობიაშვილი.jpg" },
    { name: "რესან კონცელიძე", image: "monebi/რესან კონცელიძე.jpg" },
    { name: "მარიამ ლაშხი", image: "monebi/მარიამ ლაშხი.jpg" },
    { name: "ზაზა ლომინაძე", image: "monebi/ზაზა-ლომინაძე.jpg" },
    { name: "დავით მათიკაშვილი", image: "monebi/დავით მათიკაშვილი.jpg" },
    { name: "სამველ მანუკიანი", image: "monebi/სამველ მანუკიანი.jpg" },
    { name: "ლევან მაჭავარიანი", image: "monebi/ლევან მაჭავარიანი.jpg" },
    { name: "ლევან მგალობლიშვილი", image: "monebi/ლევან მგალობლიშვილი.jpg" },
    { name: "ირაკლი მეზურნიშვილი", image: "monebi/ირაკლი მეზურნიშვილი.jpg" },
    { name: "გოგი მეშველიანი", image: "monebi/გოგი მეშველიანი.jpeg" },
    { name: "ირაკლი მეძმარიაშვილი", image: "monebi/ირაკლი მეძმარიაშვილი.jpeg" },
    { name: "სავალან მირზოევი", image: "monebi/სავალან მირზოევი.jpg" },
    { name: "გივი მიქანაძე", image: "monebi/გივი მიქანაძე.jpg" },
    { name: "იმედა ნიკურაძე", image: "monebi/იმედა ნიკურაძე.png" },
    { name: "ანტონ ობოლაშვილი", image: "monebi/ანტონ ობოლაშვილი.jpeg" },
    { name: "ბექა ოდიშარია", image: "monebi/ბექა ოდიშაია.jpg" },
    { name: "ანრი ოხანაშვილი", image: "monebi/ანრი ოხანაშვილი.jpg" },
    { name: "შალვა პაპუაშვილი", image: "monebi/შალვა პაპუაშვილი.jpg" },
    { name: "გელა სამხარაული", image: "monebi/გელა სამხარაული.jpg" },
    { name: "ნიკოლოზ სამხარაძე", image: "monebi/ნიკოლოზ სამხარაძე.jpg" },
    { name: "ვიქტორ სანიკიძე", image: "monebi/ვიქტორ სანიკიძე.jpg" },
    { name: "დავით სონღულაშვილი", image: "monebi/დავით სონღულაშვილი.jpg" },
    { name: "გიორგი სოსიაშვილი", image: "monebi/გიორგი სოსიაშვილი.jpg" },
    { name: "ალექსანდრე ტაბატაძე", image: "monebi/ალექსანდრე ტაბატაძე.jpg" },
    { name: "ნოდარ ტურძელაძე", image: "monebi/ნოდარ ტურძელაძე.jpg" },
    { name: "ირაკლი ქადაგიშვილი", image: "monebi/ირაკლი ქადაგიშვილი.jpg" },
    { name: "ლევან ქარუმიძე", image: "monebi/ლევან ქარუმიძე.jpg" },
    { name: "მერაბ ქვარაია", image: "monebi/მერაბ ქვარაია.jpg" },
    { name: "სალომე ქურასბედიანი", image: "monebi/სალომე ქურასბედიანი.jpg" },
    { name: "ალუდა ღუდუშაური", image: "monebi/ალუდა ღუდუშაური.jpg" },
    { name: "თენგიზ შარმანაშვილი", image: "monebi/თენგიზ შარმანაშვილი.jpg" },
    { name: "ირაკლი შატაკიშვილი", image: "monebi/ირაკლი შატაკიშვილი.jpeg" },
    { name: "გიორგი ჩაკვეტაძე", image: "monebi/გიორგი ჩაკვეტაძე.jpg" },
    { name: "გოდერძი ჩანქსელიანი", image: "monebi/გოდერძი ჩანქსელიანი.jpg" },
    { name: "ქეთევან ჩარკვიანი", image: "monebi/ქეთევან ჩარკვიანი.jpg" },
    { name: "ვასილ ჩიგოგიძე", image: "monebi/ვასილ ჩიგოგაძე.jpg" },
    { name: "გიორგი ცაგარეიშვილი", image: "monebi/გიორგი ცაგარეიშვილი.jpg" },
    { name: "ბეჟან წაქაძე", image: "monebi/ბეჭან წაქაძე.jpg" },
    { name: "ნინო წილოსანი", image: "monebi/ნინო წილოსანი.jpg" },
    { name: "ხატია წილოსანი", image: "monebi/ხატია წილოსანი.png" },
    { name: "გრეტა წიწავა", image: "monebi/გერნიეტა წიწავა.jpeg" },
    { name: "შოთა ხაბარელი", image: "monebi/შოთა ხაბარელი.jpg" },
    { name: "გიორგი ხახუბია", image: "monebi/გიორგი ხახუბია.jpg" },
    { name: "სალომე ჯინჯოლავა", image: "monebi/სალომე ჯინჯოლავა.png" },
    { name: "დიმიტრი სამხარაძე", image: "monebi/დიმიტრი სამხარაძე.jpg" },
    { name: "დავით კაჭარავა", image: "monebi/დავით კაჭარავა.jpg" },
    { name: "გურამ მაჭარაშვილი", image: "monebi/გურამ მაჭარაშვილი.jpg" },
    { name: "სოზარ სუბარი", image: "monebi/სოზარ სუბარი.jpg" },
    { name: "ეკა სეფაშვილი", image: "monebi/ეკა სეფაშვილი.jpeg" },
    { name: "ვიქტორ ჯაფარიძე", image: "monebi/ვიქტორ ჯაფარიძე.jpg" },
    { name: "დაჩი ბერაია", image: "monebi/დაჩი ბერაია.jpg" },
    { name: "ზაალ მიქელაძე", image: "monebi/ზაალ მიქელაძე.jpg" },
    { name: "დიმიტრი ხუნდაძე", image: "monebi/დიმიტრი ხუნდაძე.jpg" },
    { name: "მიხეილ ყაველაშვილი", image: "monebi/მიხეილ ყაველაშვილი.jpg" },
    { name: "გივი ჭიჭინაძე", image: "monebi/გივი ჭიჭინაძე.jpg" },
    { name: "ავთანდილ ენუქიძე", image: "monebi/ავთანდილ ენუქიძე.jpg" },
    { name: "ფრიდონ ინჯია", image: "monebi/ფრიდონ ინჯიაა.jpg" },
    { name: "მამუკა მდინარაძე", image: "monebi/მამუკა მდინარაძე.jpg" },
  ];

  let currentPersonIndex;
  let wrongGuesses = 0;
  let correctGuesses = 0;
  let guessedPeople = [];
  const maxLives = 5;
  const maxGuesses = 20;

  const personImage = document.getElementById("person-image");
  const nameGuessInput = document.getElementById("name-guess");
  const checkButton = document.getElementById("check-button");
  const nextButton = document.getElementById("next-button");
  const resultDisplay = document.getElementById("result");
  const correctCountDisplay = document.getElementById("correct-count");
  const heartsDisplay = document.getElementById("hearts");

  function loadRandomPerson() {
    if (guessedPeople.length >= people.length) {
      Swal.fire({
        title: "Game Over",
        text: "You have guessed all available pictures correctly!",
        icon: "success",
        confirmButtonText: "Play Again",
      }).then(() => {
        location.reload();
      });
      return;
    }

    do {
      currentPersonIndex = Math.floor(Math.random() * people.length);
    } while (guessedPeople.includes(currentPersonIndex));

    personImage.src = people[currentPersonIndex].image;
    nameGuessInput.value = "";
    resultDisplay.textContent = "";
    nextButton.style.display = "none";
    nameGuessInput.disabled = false;
    checkButton.disabled = false;
  }

  function updateHearts() {
    heartsDisplay.innerHTML = "";
    for (let i = 0; i < maxLives - wrongGuesses; i++) {
      heartsDisplay.innerHTML += "❤️ ";
    }
  }

  function showModal() {
    Swal.fire({
      title: "გილოცავ!",
      text: "შენ ყველა მოღალატე გამოიცანი. სადმე თუ შეგხვდებიან, მათი შერცხვენაც არ გაგიჭირდება!",
      icon: "success",
      confirmButtonText: "თავიდან დაწყება",
    }).then(() => {
      location.reload();
    });
  }

  function checkGuess() {
    const guessedName = nameGuessInput.value.trim().toLowerCase();
    const actualName = people[currentPersonIndex].name.toLowerCase();
    const nameParts = actualName.split(" ");
    const surname = nameParts[nameParts.length - 1];

    if (guessedName === "") {
      resultDisplay.textContent = "ველი ცარიელია";
      resultDisplay.style.color = "red";
      return; //
    }

    if (guessedName === actualName || guessedName === surname) {
      resultDisplay.textContent = `სწორია! ეს მოღალატეა ${people[currentPersonIndex].name}`;
      resultDisplay.style.color = "green";
      correctGuesses++;
      correctCountDisplay.textContent = correctGuesses;
      nameGuessInput.disabled = true;
      checkButton.disabled = true;
      checkButton.classList.add("disabled");
    } else {
      resultDisplay.textContent = `არასწორია! ამ მოღალატის სახელია ${people[currentPersonIndex].name}`;
      resultDisplay.style.color = "red";
      wrongGuesses++;
      updateHearts();
      nameGuessInput.disabled = true;
      checkButton.disabled = true;
      checkButton.classList.add("disabled");
    }

    if (wrongGuesses >= maxLives) {
      Swal.fire({
        title: "ყველა სიცოცხლე ამოგეწურა",
        text: "ხომ იცი, რომ მტერს კარგად უნდა ცნობდე და ახლოს გყავდეს?",
        icon: "error",
        confirmButtonText: "კიდევ სცადე",
      }).then(() => {
        location.reload();
      });
    } else if (correctGuesses === maxGuesses) {
      showModal();
    } else {
      nextButton.style.display = "inline";
    }

    guessedPeople.push(currentPersonIndex);
  }

  checkButton.addEventListener("click", checkGuess);

  nameGuessInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      checkGuess();
    }
  });

  nextButton.addEventListener("click", loadRandomPerson);

  loadRandomPerson();
  updateHearts();
});
