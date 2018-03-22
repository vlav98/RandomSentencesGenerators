var sentence = new Array();

var cat = 0
//catégorie de la liste
var i
//incrémentation

i=0
sentence[cat] = new Array();
sentence[cat][0] = "phrase"
sentence[cat][1] = new Array();
sentence[cat][1][i++] = "<personnage> rencontre <personnage2> <lieu> <condition>."
sentence[cat][1][i++] = "<personnage> est <role> dans un monde <monde>."

cat++
i=0
sentence[cat] = new Array();
sentence[cat][0] = "lieu"
sentence[cat][1] = new Array();
sentence[cat][1][i++] = "dans un café"
sentence[cat][1][i++] = "dans un restaurant"
sentence[cat][1][i++] = "à l'école"
sentence[cat][1][i++] = "à une fête"
sentence[cat][1][i++] = "au centre commercial"
sentence[cat][1][i++] = "dans une forêt"
sentence[cat][1][i++] = "sur internet"

cat++
i=0
sentence[cat] = new Array();
sentence[cat][0] = "condition"
sentence[cat][1] = new Array();
sentence[cat][1][i++] = ""
sentence[cat][1][i++] = "par hasard"
sentence[cat][1][i++] = "après un accident"
sentence[cat][1][i++] = "en s'étant perdu"
sentence[cat][1][i++] = "en se trompant"
sentence[cat][1][i++] = "à cause d'un gage"
sentence[cat][1][i++] = "après une visite"

cat++
i=0
sentence[cat] = new Array();
sentence[cat][0] = "personnage"
sentence[cat][1] = new Array();
sentence[cat][1][i++] = "Un humain"
sentence[cat][1][i++] = "Un sorcier"
sentence[cat][1][i++] = "Un démon"
sentence[cat][1][i++] = "Un magicien"
sentence[cat][1][i++] = "Un chanteur"
sentence[cat][1][i++] = "Un pianiste"
sentence[cat][1][i++] = "Un hybride(animal/humain)"

cat++
i=0
sentence[cat] = new Array();
sentence[cat][0] = "personnage2"
sentence[cat][1] = new Array();
sentence[cat][1][i++] = "un humain"
sentence[cat][1][i++] = "un sorcier"
sentence[cat][1][i++] = "un démon"
sentence[cat][1][i++] = "un magicien"
sentence[cat][1][i++] = "un chanteur"
sentence[cat][1][i++] = "un pianiste"
sentence[cat][1][i++] = "un hybride"
sentence[cat][1][i++] = "un fantôme"
sentence[cat][1][i++] = "une sirène"
sentence[cat][1][i++] = "un barman"

cat++
i=0
sentence[cat] = new Array();
sentence[cat][0] = "role"
sentence[cat][1] = new Array();
sentence[cat][1][i++] = "un humain"
sentence[cat][1][i++] = "un troll"
sentence[cat][1][i++] = "un magicien"
sentence[cat][1][i++] = "un sorcier"
sentence[cat][1][i++] = "un dragon"
sentence[cat][1][i++] = "un vampire"
sentence[cat][1][i++] = "un infirmier"
sentence[cat][1][i++] = "un prince"

cat++
i=0
sentence[cat] = new Array();
sentence[cat][0] = "monde"
sentence[cat][1] = new Array();
sentence[cat][1][i++] = "magique"
sentence[cat][1][i++] = "Steampunk"
sentence[cat][1][i++] = "de super-héros"
sentence[cat][1][i++] = "réaliste"
sentence[cat][1][i++] = "d'époque victorienne"
sentence[cat][1][i++] = "urbain fantaisiste"

function iRandom(nRange){
	var iRandom
	iRandom = Math.round((Math.random() * nRange));
	return iRandom;
}

function GetFrom(aArray){
	var undefined
	var sReturn
	sReturn = aArray[iRandom(aArray.length)];
	if (sReturn == undefined)
	{
		sReturn = GetFrom(aArray)
	}
	return sReturn
}

function getSentence(sArrayName){
	for (var y=0; y <sentence.length; y++)
		{
			if (sentence[y][0]==sArrayName)
			{
				return sentence[y][1];
				break;
			}
		}
}

function ScanSentence(sSentence)
{
	var iStart, iEnd
	var sKey

	if (sSentence.indexOf("<") > -1)
	{
		iStart = sSentence.indexOf("<");
		iEnd = sSentence.indexOf(">");
		
		sKey = sSentence.substr(iStart+1, iEnd-(iStart+1));

		sKey = GetFrom(getSentence(sKey))
		sSentence = sSentence.substr(0, iStart) + sKey + sSentence.substr(iEnd+1, (sSentence.length - iEnd))

	}
	

	if (sSentence.indexOf("<") > - 1)
	{
		sSentence = ScanSentence(sSentence)
	}

	return sSentence;
}

function GenPlot()
{
	sSentence = GetFrom(getSentence("phrase"));

	sSentence = ScanSentence(sSentence)

	/*alert(sSentence);*/
	document.getElementById("plot").innerHTML = sSentence;
}