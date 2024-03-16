import React, { useState } from 'react';
import '../components/tools.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

function Tools() {
 const [isVisible, setIsVisible] = useState({
    kaliLinux: false,
    metasploit: false,
    wireshark: false,
    tor: false,
    exploitKits: false,
 });

 const [isVisible_1, setIsVisible_1] = useState({
    socialEngineering: false,
    phishing: false,
    impersonation: false,
    ddosAttacks: false,
    networkReconnaissance: false,
    exploitation: false,
 });

 const [input, setInput] = useState('');
 const [output, setOutput] = useState('');
 const [user, setUser] = useState(null);

 const handleInputChange = (e) => {
    setInput(e.target.value);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(processCommand(input));
    setInput('');
 };

 const processCommand = (command) => {
    const commandParts = command.trim().split(' ');
    const baseCommand = commandParts[0];
    const args = commandParts.slice(1);

    switch (baseCommand) {
      case 'whoami':
        return user ? `You are: ${user}` : 'Hello friend';
      case 'signIn':
        setUser('John Doe'); // Simulate signing in
        return 'Signed in successfully.';
      case 'signOut':
        setUser(null); // Simulate signing out
        return 'Signed out successfully.';
      case 'getLocation':
        return getLocation();
      case 'clear':
        setOutput('');
        return '';
      case 'getcode':
        return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      case 'ls':
        return 'Listing files and directories...';
      case 'cd':
        return `Changed directory to: ${args.join(' ')}`;
      case 'pwd':
        return 'Print working directory...';
      case 'help':
        return 'Available commands are: whoami, signIn, signOut, getLocation, clear, getcode, ls, cd, pwd, help, cat, touch, rm, mkdir, rmdir, echo, grep.';
      case 'cat':
        return `Displaying contents of: ${args.join(' ')}`;
      case 'touch':
        return `Creating new file: ${args.join(' ')}`;
      case 'rm':
        return `Removing file: ${args.join(' ')}`;
      case 'mkdir':
        return `Creating new directory: ${args.join(' ')}`;
      case 'rmdir':
        return `Removing directory: ${args.join(' ')}`;
      case 'echo':
        return args.join(' ');
      case 'grep':
        return `Searching for pattern: ${args.join(' ')} in file: ${args[0]}`;
      default:
        return 'Command not recognized. Available commands are: whoami, signIn, signOut, getLocation, clear, getcode, ls, cd, pwd, help, cat, touch, rm, mkdir, rmdir, echo, grep.';
    }
 };

 const getLocation = () => {
    if (!navigator.geolocation) {
      return 'Geolocation is not supported by your browser.';
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        return `Your location: Latitude: ${latitude}, Longitude: ${longitude}`;
      },
      (error) => {
        return 'Unable to retrieve your location.';
      }
    );
 };

 const handleClick = (tool) => {
    setIsVisible(prevState => ({
      ...prevState,
      [tool]: !prevState[tool],
    }));
 };

 return (
    <>
      <div className="bgimgae-hacking">
        <div className="terminalborder">
          <div className="topnavbar ">
            <nav className="navbar navbar-expand-lg navbarcolour-terminal p-1 ">
              <a className="navbar-brand " href="#">
                <div className='text-white'>
                 <FontAwesomeIcon icon={faWindowMaximize} />
                </div>
              </a>
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                 <a className="nav-link text-white" href="#">elliot@kali:~/Desktop <span class="sr-only"></span></a>
                </li>
              </ul>
              <div className="buttonnavbars">
                <button className='topnavbaricon'><FontAwesomeIcon icon={faMinus} /></button>
                <button className='topnavbaricon'> <FontAwesomeIcon icon={faExpand} /> </button>
                <button className='topnavbaricon'> <FontAwesomeIcon icon={faX} /></button>
              </div>
            </nav>
          </div>
          <section>
            <div className="container-fluid ">
              <h1 className='main-h1-terminal pt-3 '>
                #Tools used in Mr Robot : click to know more
              </h1>
              <div>
            <h4 className='h4-tools' onClick={() => handleClick('kaliLinux')}>
               <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>$ Kali Linux
            </h4>
            {isVisible.kaliLinux && <p className='p-terminal'><span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>Linux distribution for penetration testing and ethical hacking.</p>}
          </div>
          <div>
            <h4 className='h4-tools' onClick={() => handleClick('metasploit')}>
            <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>$ Metasploit
            </h4>
            {isVisible.metasploit && <p className='p-terminal'><span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>Open-source penetration testing framework for exploiting vulnerabilities.</p>}
          </div>
          <div>
            <h4 className='h4-tools' onClick={() => handleClick('wireshark')}>
            <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>$ Wireshark
            </h4>
            {isVisible.wireshark && <p className='p-terminal'><span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>Network protocol analyzer used for network troubleshooting and analysis.</p>}
          </div>
          <div>
            <h4 className='h4-tools' onClick={() => handleClick('tor')}>
            <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>$ Tor
            </h4>
            {isVisible.tor && <p className='p-terminal'><span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>  Anonymizing network used for browsing the internet anonymously and securely.</p>}
          </div>
          <div>
            <h4 className='h4-tools' onClick={() => handleClick('exploitKits')}>
            <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>$ Exploit Kits
            </h4>
            {isVisible.exploitKits && <p className='p-terminal'><span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>Collections of exploits targeting vulnerabilities in software and systems.</p>}
          </div>
            </div>
          </section>
          <section>
            <div className="container-fluid mb-5">
              <h1 className='main-h1-terminal pt-3'>
               #Hacking Techniques in "Mr. Robot" : click to know more
              </h1>
              <div>
            <h4 className='h4-tools' onClick={() => handleClick('socialEngineering')}>
            <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>$ Social Engineering
            </h4>
            {isVisible.socialEngineering && <p className='p-terminal'><span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>Manipulating individuals to divulge sensitive information or grant access through deception.</p>}
          </div>
          <div>
            <h4 className='h4-tools' onClick={() => handleClick('phishing')}>
            <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>$ Phishing
            </h4>
            {isVisible.phishing && <p className='p-terminal'><span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>Sending fraudulent emails or messages to trick recipients into revealing confidential information.</p>}
          </div>
          <div>
            <h4 className='h4-tools' onClick={() => handleClick('impersonation')}>
            <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>$ Impersonation
            </h4>
            {isVisible.impersonation && <p className='p-terminal'><span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>Pretending to be someone else to gain trust or access.</p>}
          </div>
          <div>
            <h4 className='h4-tools' onClick={() => handleClick('ddosAttacks')}>
            <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>$ DDoS Attacks
            </h4>
            {isVisible.ddosAttacks && <p className='p-terminal'><span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>Overwhelming a target system with a flood of traffic to disrupt its normal operation.</p>}
          </div>
          <div>
            <h4 className='h4-tools' onClick={() => handleClick('networkReconnaissance')}>
            <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>$ Network Reconnaissance
            </h4>
            {isVisible.networkReconnaissance && <p className='p-terminal'><span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>Gathering information about a target network to identify vulnerabilities and potential entry points.</p>}
          </div>
          <div>
            <h4 className='h4-tools' onClick={() => handleClick('exploitation')}>
            <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>$ Exploitation
            </h4>
            {isVisible.exploitation && <p className='p-terminal'><span className='t-user'>elliot@kali:<span className='t-arrow'>~</span> </span>Leveraging vulnerabilities in software or systems to gain unauthorized access or control.</p>}
          </div>
            </div>
            <div className='container-fluid'>
              <h1 className='main-h1-terminal '>
            #Type 'help' to see available commands.
              </h1>
              <form onSubmit={handleSubmit}>
                <p>
                 <h4 className='h4-tools'>
                    <span className='t-user'>elliot@kali:<span className='t-arrow'>~</span></span> $
                    <input className='input-from'
                      type="text"
                      value={input}
                      onChange={handleInputChange}
                      onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                          handleSubmit(event);
                        }
                      }}
                    />
                 </h4>
                </p>
              </form>
              <pre className='output-pree'>{output}</pre>
            </div>
          </section>
        </div>
      </div>
    </>
 );
}

export default Tools;