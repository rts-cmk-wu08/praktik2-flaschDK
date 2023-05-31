import { FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'

const Agent = ({agent}) => {
    
    return ( 
<>
<article>
<img src={agent.image.url} alt={agent.name} />
<h3>{agent.name}</h3>
<p>{agent.title}</p>
<hr/>
<p><FaPhoneAlt/>{" "} {agent.phone}</p>
<p><FaPaperPlane/>{" "} {agent.email}</p>
</article>
</>
     );
}
 
export default Agent;