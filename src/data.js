const names=["Aaran","Aaren", "Aarez", "Aarman", "Aaron", "Geomer", "Geordan", "Geordie", "George", "Georgia", "Georgy", "Gerard", "Ghyll", "Giacomo", "Gian", "Giancarlo", "Gianluca", "Gianmarco", "Gideon", "Gil", "Gio", "Girijan", "Girius", "Gjan", "Glascott", "Glen", "Glenn", "Gordon", "Grady", "Graeme", "Graham", "Grahame","Hari", "Harikrishna", "Haris", "Harish", "Harjeevan", "Harjyot", "Harlee", "Harleigh", "Harley","Harvey mason goes", "Harvie", "Harvinder", "Hasan", "Haseeb", "Hashem", "Hashim", "Hassan", "Hassanali", "Hately", "Havila", "Hayden", "Haydn", "Haydon", "Haydyn", "Hcen", "Hector", "Heddle", "Heidar", "Heini", "Hendri", "Henri", "Henry", "Herbert", "Heyden", "Hiro", "Hirvaansh", "Hishaam", "Hogan", "Honey", "Hong", "Hope", "Hopkin", "Hosea", "Howard", "Howie", "Hristomir", "Hubert", "Hugh", "Hugo", "Humza", "Hunter", "Husnain", "Hussain","Jac", "Jace", "Jack", "Jacki", "Jackie", "Jack-James", "Jackson", "Jacky", "Jacob", "Jacques", "Jad", "Jaden", "Jadon", "Jadyn", "Jae", "Jagat", "Jago", "Jaheim", "Jahid", "Jahy", "Jai", "Jaida", "Jaiden", "Jaidyn", "Jaii","Jameel", "Jameil", "James", "James-Paul", "Jamey", "Jamie", "Jan", "Jaosha", "Jardine", "Jared", "Jarell", "Jarl", "Jarno", "Jarred", "Jarvi", "Jasey-Jay", "Jasim", "Jaskaran", "Jason", "Jasper", "Jaxon", "Jaxson", "Jay", "Jaydan", "Jaydyn", "Jayhan", "Jay-Jay", "Jayke", "Jaymie", "Jayse", "Jayson", "Jaz", "Jazeb", "Jazib", "Jazz", "Jean", "Jean-Lewis", "Jean-Pierre", "Jebadiah", "Jed", "Jedd", "Jedidiah", "Jeemie", "Jeevan", "Jeffrey", "Jensen", "Jenson", "Jensyn", "Jeremy", "Jerome", "Jeronimo","Jiao", "Jimmy", "Jincheng", "JJ", "Joaquin", "Joash", "Jock", "Jody", "Joe"];
export function searchAndCreateElements(value){
    let results;
    if(value){
        let testValue=new RegExp(`${value}`,'i');
        let foundNames=names.filter(letters=>testValue.test(letters))

        results=foundNames.map(replaceStringWithElement);
        function replaceStringWithElement(name){
            let matchValue=name.split(testValue);
            //if end or start is empty replace with span value
            if(matchValue[0]===''){
                return <li className="results-item">Suggested Name Is <span className="shade">{value}</span>{matchValue[1]}</li>
            }else if(matchValue[matchValue.length-1]===''){
                return <li className="results-item">Suggested Name Is {matchValue[0]}<span className="shade">{value}</span></li>
            }else{
                //if neither start or end empty replace middle with span
                return <li className="results-item">Suggested Name Is {matchValue[0]}<span className="shade">{value}</span>{matchValue[1]} </li>
            }
        }
    }

    if(results){
        return results
    }else{
        return [<li>There is nothing to display</li>]
    }
}