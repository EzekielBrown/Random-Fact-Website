const facts = [
	{ 
		"fact" : "The longest wedding veil was longer than 63 football fields", 
		"source" : "n/a" 
	},
	{
		"fact" : "McDonald’s once made bubblegum-flavored broccoli", 
		"source" : "n/a"
	},
	{
		"fact" : "The first oranges weren’t orange", 
		"source" : "n/a"
	},
	{
		"fact" : "A cow-bison hybrid is called a “beefalo”", 
		"source" : "n/a"
	},
	{
		"fact" : "Scotland has 421 words for “snow”", 
		"source" : "n/a"
	},
	{
		"fact" : "Octopuses lay 56,000 eggs at a time", 
		"source" : "n/a"
	},
	{
		"fact" : "Cats have fewer toes on their back paws", 
		"source" : "n/a"
	},
	{
		"fact" : "The current American flag was designed by a high school student", 
		"source" : "n/a"
	}
]

function randomFact() {
  let random = facts[Math.floor(Math.random() * facts.length)];
  factual.innerText = `${random.fact}.`;
  source.innerText = `source: ${random.source}`;
}


randomFact();

document.querySelector("button").addEventListener('click', randomFact)
