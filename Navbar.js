function Navbar(){
    return `<div id="SignUp">
    <div><i class="fas fa-times" onclick="close1()"></i></div>
    <form id="form">
        <input type="text" id="name1" placeholder="Enter Name"><br>
        <input type="email" id="email" placeholder="Enter Email"><br>
        <input type="password" id="pass" placeholder="Password"><br>
        <input type="text" id="username" placeholder="Username"><br>
        <input type="number" id="mobile" placeholder="Contact Number"><br>
        <input type="text" id="description" placeholder="Description"><br>
        Already have Account/<a href="#" onclick="Sin()">Sign in</a>
       <div id="div-sub"><button id="submit">Submit</button> <div id="pro"></div></div>
    </form>
</div>
<div id="Signin">
    <div><i class="fas fa-times" onclick="close2()"></i></div>
    <input type="text" id="usernameIn" placeholder="Username"><br>
    <input type="password" id="passIn" placeholder="Password"><br>
   <div id="div-sub1"><button id="submit1" onclick="SIgn()">Submit</button> <div id="pro1"></div></div>
</div>
<div id="PinCode">
    <i class="fas fa-map-marker-alt"></i> PINCODE <a href="">415002 <i class="fas fa-edit"></i></a>
</div>
<div id="header">
    <div id="logo">
        <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://www.croma.com/assets/images/croma_logo_dark.png/mxw_160,f_auto">
    </div>
    <div>
        <span id="Menu">&#8801; Menu</span>
        <span id="Cross">&#10060; Menu</span>
    </div>
    <div id="Search_Inputs">
        <div>
            <input type="text" placeholder="What are you looking for?">
        </div>
        <div>
            <button><i class="fas fa-search"></i></button>
        </div>
    </div>
    <div id="Pre_Options">
        <span>ORDERS</span>
        <span id="Sign" onclick="Sign()">SIGN IN</span>
        <span>|</span>
        <span>
            <i class="fas fa-shopping-cart"></i>
            CART
        </span>
    </div>
</div>
<div id="Category_Menu">
    <li id="Category">SHOP BY CATEGORY
        <ul id="TVs">Televisions & Accessories
                <ul id="TVs_Show">
                    <div id="Div_TVs">
                    <ul>LED TVs</ul><br>
                    <ul>QLED TVs</ul><br>
                    <ul>OLED TVs</ul><br>
                    <ul>4K ultra HD TVs</ul><br>
                    <ul>8K ultra HD TVs</ul><br>
                    <ul>Smart TVs</ul><br>
                    <ul>Full HD TVs</ul><br>
                    <ul>HD Ready TVs</ul><br>
                    <ul>Android Smart TVs</ul><br>
                    <ul>Large Screen TVs</ul>
                </div>
                </ul>
        </ul>
        <ul id="Home_Appliances">Home Appliances
            <ul id="Home_Show">
                <div id="Div_Home">
                <ul>Washing Machines & Dryers</ul><br>
                <ul>Front Load Washing Machines</ul><br>
                <ul>Top Load Washing Machines</ul><br>
                <ul>Rfigerators & Freezers</ul><br>
                <ul>Double/Tripple Door Refrigerator</ul><br>
                <ul>Ice Makers</ul><br>
                <ul>Air Conditioners</ul><br>
                <ul>Vacuum Cleaners</ul><br>
                <ul>Irons</ul><br>
                <ul>Home Safety Security</ul>
            </div>
            </ul>
        </ul>
        <ul id="Phones">Phones & Wearables
            <ul id="Phone_Show">
                <div id="Div_Phone">
                <ul>Mobile Phones</ul><br>
                <ul>Android Phones</ul><br>
                <ul>iPhones</ul><br>
                <ul>Gaming Mobile Phones</ul><br>
                <ul>Wearables</ul><br>
                <ul>Smart Watches</ul><br>
                <ul>VR Headset</ul><br>
                <ul>Bluetooth Headphones</ul><br>
                <ul>Mobile Accessories</ul><br>
                <ul>Truly Wireless Earbuds</ul>
                </div>
            </ul>
        </ul>
        <ul id="Computers">Computers & Tablets
            <ul id="Computers_Show">
                <div id="Div_Computers">
                <ul>Laptops</ul><br>
                <ul>MacBooks</ul><br>
                <ul>Gaming Laptops</ul><br>
                <ul>Windows Laptops</ul><br>
                <ul>iPads</ul><br>
                <ul>Ultra Thin Laptops</ul><br>
                <ul>Digital Pads</ul><br>
                <ul>Inject Printers</ul><br>
                <ul>3D Printers & 3D Pens</ul><br>
                <ul>Pen Drives</ul>
                </div>
            </ul>
        </ul>
        <ul id="Kitchen">Kitchen Appliances
            <ul id="Kitchen_Show">
                <div id="Div_Kitchen">
                <ul>Dishwashers</ul><br>
                <ul>Microwave & Ovens</ul><br>
                <ul>Rice Cookers</ul><br>
                <ul>Coffee Makers</ul><br>
                <ul>Tea Makers</ul><br>
                <ul>Cooking Appliances</ul><br>
                <ul>Air Fryers</ul><br>
                <ul>Hobs</ul><br>
                <ul>Gas Stove</ul><br>
                <ul>Juicers & Blenders</ul>
                </div>
            </ul>
        </ul>
        <ul id="Audio">Audio & Video
            <ul id="Audio_Show">
                <div id="Div_Audio">
                <ul>Media Players</ul><br>
                <ul>Earphones</ul><br>
                <ul>Croma Media Players</ul><br>
                <ul>Speakers</ul><br>
                <ul>Smart Speakers</ul><br>
                <ul>Audio Accessories</ul><br>
                <ul>Ultra HD 4K Projectors</ul><br>
                <ul>Audio Cases & Covers</ul><br>
                <ul>Croma Speakers</ul><br>
                <ul>Other Audio Systems</ul>
            </div>
            </ul>
        </ul>
        <ul id="Health">Health & Fitness
            <ul id="Health_Show">
                <div id="Div_Health">
                <ul>Health Care Products</ul><br>
                <ul>Massagers</ul><br>
                <ul>Weights & Scales</ul><br>
                <ul>Sanitization Products</ul><br>
                <ul>Nebulizers</ul><br>
                <ul>Hearing Aids</ul><br>
                <ul>Health Monitors</ul><br>
                <ul>Baby Care Products</ul><br>
                <ul>Fitness Equipments</ul><br>
                <ul>Covid-19 Essentials</ul>
            </div>
            </ul>
        </ul>
        <ul id="Grooming">Grooming & Personal Care
            <ul id="Grooming_Show">
                <div id="Div_Grooming">
                <ul>Hair Care Products</ul><br>
                <ul>Hair Straightners</ul><br>
                <ul>Hair Dryers</ul><br>
                <ul>Hair Stylers</ul><br>
                <ul>Croma Hair Care Products</ul><br>
                <ul>Personal Grooming Products</ul><br>
                <ul>Epilators</ul><br>
                <ul>Trimmers</ul><br>
                <ul>Shavers</ul><br>
                <ul>Pet Care Products</ul>
            </div>
            </ul>
        </ul>
        <ul id="Cameras">Cameras & Accessories
            <ul id="Cameras_Show">
                <div id="Div_Cameras">
                <ul>Point & Shoot Cameras</ul><br>
                <ul>Instant Cameras</ul><br>
                <ul>DSLR Cameras</ul><br>
                <ul>Mirrorless Cameras</ul><br>
                <ul>Camera Lens</ul><br>
                <ul>Camcorders</ul><br>
                <ul>Memmory Cards</ul><br>
                <ul>Camera Filters</ul><br>
                <ul>Photo Paper Sheets</ul><br>
                <ul>Camera Accessories</ul>
            </div>
            </ul>
        </ul>
        <ul id="Smart">Smart Devices
            <ul id="Smart_Show">
                <div id="Div_Smart">
                <ul>Smart Kitchen Devices</ul><br>
                <ul>Smart Home Devices</ul><br>
                <ul>Smart Display</ul><br>
                <ul>Universal & Smart Remotes</ul><br>
                <ul>Smart TVs</ul><br>
                <ul>Smart ACs</ul><br>
                <ul>Smart Air Purifiers</ul><br>
                <ul>Smart Fans</ul><br>
                <ul>Smart Plugs</ul><br>
                <ul>Smart Work Devices</ul>
            </div>
            </ul>
        </ul>
        <ul id="Gaming">Gaming
            <ul id="Gaming_Show">
                <div id="Div_Gaming">
                <ul>Gaming Consoles</ul><br>
                <ul>Gaming Laptops</ul><br>
                <ul>Gaming Softwares</ul><br>
                <ul>PlayStations Games</ul><br>
                <ul>Gaming Accessories</ul><br>
                <ul>Gaming Mice</ul><br>
                <ul>Electronic Toys</ul><br>
                <ul>Educationals Toys</ul><br>
                <ul>Robot Toys & Accessories</ul><br>
                <ul>Walkie Talkies</ul>
            </div>
            </ul>
        </ul>
        <ul id="Accessories">Accessories
            <ul id="Accessories_Show">
                <div id="Div_Accessories">
                <ul>Traveller Accessories</ul><br>
                <ul>Smart Wallets</ul><br>
                <ul>Travel Bags</ul><br>
                <ul>Car Accessories</ul><br>
                <ul>Gift & Value Card</ul><br>
                <ul>TV Cables & Connectors</ul><br>
                <ul>Tablets Keyboards</ul><br>
                <ul>Battries & Charges</ul><br>
                <ul>Screen Protectors</ul><br>
                <ul>Laptops Webcams & Mice</ul>
            </div>
            </ul>
        </ul>
        <ul id="Brands">Top Brands
            <ul id="Brands_Show">
                <div id="Div_Brands">
                <ul>Amazon</ul><br>
                <ul>Apple</ul><br>
                <ul>Bajaj</ul><br>
                <ul>Blue Star</ul><br>
                <ul>Boat</ul><br>
                <ul>Bosch</ul><br>
                <ul>Bose</ul><br>
                <ul>Canon</ul><br>
                <ul>Realme</ul><br>
                <ul>Samsung</ul>
            </div>
            </ul>
        </ul>
    </li>
</div>`
}

export default Navbar