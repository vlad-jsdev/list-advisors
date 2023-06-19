export default function generateAdvisers() {
	const names = [
	  "John Doe", "Jane Smith", "Michael Johnson", "Emily Williams", "David Brown", "Sarah Davis",
	  // Add more names here
	];
  
	const languages = [
	  "English", "Spanish", "French", "German", "Chinese", "Japanese", "Russian", "Portuguese",
	  // Add more languages here
	];
  
	const advisers = [];
  
	for (let i = 0; i < 50; i++) {
	  const name = names[Math.floor(Math.random() * names.length)];
	  const online = Math.random() < 0.5 ? "online" : "offline";
	  const reviews = Math.floor(Math.random() * 100) + 1;
  
	  const languageCount = Math.floor(Math.random() * 3) + 1;
	  const selectedLanguages = new Set();
	  while (selectedLanguages.size < languageCount) {
		const language = languages[Math.floor(Math.random() * languages.length)];
		selectedLanguages.add(language);
	  }
	  const languageString = Array.from(selectedLanguages).join(", ");
  
	  const adviser = { name, online, reviews, languages: languageString };
	  advisers.push(adviser);
	}
  
	return advisers;
}
