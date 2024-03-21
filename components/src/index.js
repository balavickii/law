import { View, Text } from 'react-native'
import React ,{useState} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import axios from 'axios'

const Chat = () => {
    const [messages,setMessages]=useState([])

    const handleSend=async (newMessages=[])=>{
        try{
            const userMessage=newMessages[0];
            setMessages(previousMessages => GiftedChat.append(previousMessages,userMessage));
            const messageText = userMessage.text.toLowerCase();
            const keywords= ['law','school zone','speed limit','traffic signals','right to way','lane discipline','traffic law','child law','marriage Act','food act','food law','define law rules','consumer act','human rights act','Registration act','mobile phones','parking regulation','overtaking','pedestrain crossings','vehicle','public transportation rules','emergency vehicles','traffic fine','traffic fines','helmet fines','helmet fine','Driving Without a Seat Belt','Using Mobile Phone While Driving','Not Wearing Helmet (for two-wheeler riders)','Speeding','Jumping Traffic Signal','Drunk and Drive fines','Drunk Driving','Motor Vehicles (Amendment) Act, 2019','Drunk Driving Fine in India','Road Signs','Marriage act','Marriage eligibility','marriage','Indian independence act','Constitution act','Partition act','Legislative act','Transitional act','Administrative act','Forest rights act','Social justice act','Environmental and Consveraction act',
            'Land rights act','cultural and indigenous rights act','human rights act','communtiy rights act','legal framework','tribal rights act','POSCO act','protection of children from sexual offence act',
            'criminal offenses','age of consent','special courts','child friendly procedures','punishment manitory reporting','protection of child witness','confidentiality',
            'sexual harrassment act women at workplace act','prevention','prohibition','redressal','complaint mechanism','protection for complainarts','investigation and redressal','Awareness and training',
            'legal renedies','The transgender person act','protection of rights act','protection from abuse and violence','transgender','welfare board','Recognition of Identity','Income tax act','Taxable income',
            'Tax rates','Deduction and Exemptions','Tax credits',' Filing and payment proceducer','business income taxation','capital gains taxation','international Taxation','tax enforcement and penalties',
            'Tax Administration','Amendments and updates','Traffic and Road Safety Laws','These include acts and regulations related to traffic rules',' drivers licenses',' vehicle registration','road safety', 
            'Consumer Protection Act','This act safeguards the rights of consumers','regulates product quality',' safety','services',' ensuring fair practices by businesses','Income Tax Act','This act governs taxation on income',' including individual income tax returns',' deductions','exemptions','Criminal Code','Criminal laws are important for maintaining public safety and order','covering various offenses','Employment Laws','These include acts related to labor rights',' minimum wage',' working hours','workplace safety','affecting both employees and employers',
            'Healthcare Laws','Regulations related to healthcare','health insurance',' medical malpractice','patient rights',' impact individuals seeking medical services','Environmental Protection Laws',' These laws aim to protect the environment',' covering pollution control',' waste management','conservation efforts',
            'Family Law','Family-related acts cover marriage',' divorce',' child custody','adoption',' affecting individuals and families directly','Data Protection','Privacy Laws',' These laws govern how personal data is collected',' stored','used',' becoming increasingly important in the digital age','Property and Real Estate Laws: Regulations regarding property ownership, transactions, and rental agreements impact homeowners, renters, and landlords.Education Laws..Laws related to education, including access to quality education, can affect students, parents, and educational institutions.Banking and Financial Regulations: Laws that govern banking, loans, and financial transactions.Civil Rights and Anti-Discrimination Laws:race, gender, religion, or disability ','copyrights','trademarks affect creators', 'inventors','passenger overload','overloaded vehcile','overloading','Seat belt','Overloading oftwo wheelers','Helmets','Driving licence','Rules of road regilation violation','Travel without ticket','Disobedience of orders of authorities','Unauthorized use of vehicles without licence','Driving without licence','Driving without insurance','Offences by juveniles','Hit and run compenstion','Travel without ticket','offence by enforcing officers','oversize vehicles','Over speeding','Dangerous driving penalty','vechile without permit','Aggregators',
            ,'Child protection laws','Education laws','child labour laws','Adoption laws','Juvenile justice laws','child welfare laws','child rights conventions','child protection','child welfare','child abuse','child adovcacy','Child custody','Child support','Child labour','child adoption','Child trafficking','child Marriage','child exploitation','child foster care','Child guardianship','Child neglect','Child safety','Child protection agency','child protection policies','children rights convention',
            'Food Safety','Food Standards','Food Inspection','Food Labeling','Food Handling','Foodborne Illness','Food Contamination','Food Hygiene','Food Additives','Food Quality','Food Manufacturing','Food Packaging','Food Allergens','Food Recall','Food Adulteration','Foodborne Pathogens','Food Licensing','Food Safety Authority','Food Safety Regulations','Food Safety Standards'
           ,'Women Safety','Gender-Based Violence','Domestic Violence','Sexual Harassment','Women Rights','Gender Equality','Women Empowerment','Protection of WomenAnti-Harassment Laws','Stalking Laws','Women Shelters','Women Support Services','Sexual Assault Laws','Women Legal Rights','Women Rights Advocacy','Women Safety Policies','Gender-Based Discrimination','Women Protection Act','Women Rights Commission','Women Safety Programs','Human Rights','Civil Liberties','Universal Declaration of Human Rights','Equal Rights','Human Dignity','Right to Life','Freedom of Speech','Freedom of Religion','Right to Privacy','Right to Education','Right to Equality','Right to Fair Trial','Anti-Discrimination Laws','Human Rights Commission','Human Rights Violations','Human Rights Advocacy','International Human Rights','Humanitarian Law','Human Rights Treaties','Human Rights Protections',
            'Taxation','Tax Law','Tax Code','Income Tax','Tax Deductions','Tax Credits','Taxable Income','Tax Exemptions','Tax Planning','Tax Compliance','Tax Evasion','Tax Filing','Tax Audits','Tax Rates','Sales Tax','Property Tax','Corporate Tax','Value Added Tax (VAT)','Excise Tax','Tax Jurisdiction','Keywords related to education acts and legislation include',
            'Education Act','Education Policy','School Curriculum','Educational Standards','School Funding','Student Rights','Teacher Certification','Access to Education','Education Equity','Education Reform','Special Education','Higher Education Act','No Child Left Behind','Educational Assessment','Inclusive Education','SchoolChoice','Education Grants','Education Accountability','Education Regulations','Early Childhood Education'
            ];
            if(!keywords.some(keyword=>messageText.includes(keyword))){
                const botMessage={
                    _id: new Date().getTime()+1,
                    text: "I am Act and reference ChatBot don't search unwanted things ",
                    createdAt: new Date(),
                    user:{
                        _id: 2,
                        name: 'Law bot',
    
                    }
                };
                setMessages(previousMessages=> GiftedChat.append(previousMessages,botMessage))
                return;
            }
            const response= await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions',{
                prompt: `get me a law for ${messageText}`,
                max_tokens: 1200,
                temperature: 0.2,
                n:1,
            },{
                headers:{
                    'Context-Type':'application/json',
                    'Authorization':`Bearer ${YOUR_CHATGPT_API_KEY}`
                }
            });
            console.log(response.data);
            const recipe= response.data.choices[0].text.trim();
            const botMessage={
                _id: new Date().getTime()+1,
                text: recipe,
                createdAt: new Date(),
                user:{
                    _id:2,
                    name: 'Law bot'
                }
            };
            setMessages(previousMessages=> GiftedChat.append(previousMessages,botMessage))

        }catch(error){
            console.log(error);
        }
    };
  return (
    <View style={{flex:1}}>
      <View
        className="h-24 w-full bg-slate-50 flex justify-center items-center ">
        <Text className="text-3xl font-semibold mt-10">
            Law bot
        </Text>
        <View className="w-full h-1 bg-slate-100 mt-7"></View>
     </View>
        <GiftedChat
        messages={messages}
        onSend={newMessages=> handleSend(newMessages)}
        user={{_id:1}}
        />
    </View>
  )
}

export default Chat
