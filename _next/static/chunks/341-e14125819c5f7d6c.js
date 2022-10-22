(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{4569:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(5893),e=c(5697),f=c.n(e),g=c(3967),h=c(9501),i=c(6069),j=c(7049),k=c(1143),l=c.n(k);function m(a){var b=a.details,c=a.onChange,e=a.deleteFauna;return(0,d.jsx)("div",{className:l().container,children:b.map(function(a,b){return(0,d.jsxs)("div",{className:"frmGroup50 ".concat(l().fauna),children:[(0,d.jsxs)("h2",{className:l().title,children:["Creature ",b+1]}),b>0&&(0,d.jsx)("button",{className:"icon ".concat(l().deleteFauna),onClick:function(){return e(b)},children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:(0,d.jsx)("use",{href:"#svgClose"})})}),(0,d.jsx)(g.Z,{label:"Image",maxFiles:1,onUpload:function(a){return c(b,"image",a[0].name)}}),(0,d.jsx)(h.Z,{defaultValue:a.name,id:"nameFauna_".concat(b),type:"text",label:"Name",onChange:function(a){return c(b,"name",a)}}),(0,d.jsx)(i.Z,{defaultValue:a.ecosystem,id:"ecosystemFauna_".concat(b),label:"Ecosystem",config:[{label:"Flying",value:"Flying"},{label:"Ground",value:"Ground"},{label:"Underground",value:"Underground"},{label:"Underwater",value:"Underwater"}],onChange:function(a){return c(b,"ecosystem",a)}}),(0,d.jsx)(i.Z,{defaultValue:a.genus,id:"genusFauna_".concat(b),label:"Genus",config:j.Z,isSearchable:!0,onChange:function(a){return c(b,"genus",a)}}),(0,d.jsx)(h.Z,{defaultValue:a.height,id:"heightFauna_".concat(b),type:"text",label:"Height",onChange:function(a){return c(b,"height",a)}}),(0,d.jsx)(h.Z,{defaultValue:a.weight,id:"weightFauna_".concat(b),type:"text",label:"Weight",onChange:function(a){return c(b,"weight",a)}}),(0,d.jsx)(h.Z,{defaultValue:a.discovered,id:"discoveredFauna_".concat(b),type:"text",label:"Discovered",onChange:function(a){return c(b,"discovered",a)}}),(0,d.jsx)(h.Z,{defaultValue:a.description,id:"descriptionFauna_".concat(b),type:"text",label:"Brief description",onChange:function(a){return c(b,"description",a)}})]},b)})})}m.propTypes={details:f().array,onChange:f().func,deleteFauna:f().func}},6646:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(5893),e=c(5697),f=c.n(e),g=c(3967),h=c(9501),i=c(5941),j=c.n(i);function k(a){var b=a.details,c=a.onChange,e=a.deleteFlora;return(0,d.jsx)("div",{className:j().container,children:b.map(function(a,b){return(0,d.jsxs)("div",{className:"frmGroup50 ".concat(j().flora),children:[(0,d.jsxs)("h2",{className:j().title,children:["Plant ",b+1]}),b>0&&(0,d.jsx)("button",{className:"icon ".concat(j().deleteFlora),onClick:function(){return e(b)},children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:(0,d.jsx)("use",{href:"#svgClose"})})}),(0,d.jsx)(g.Z,{label:"Image",maxFiles:1,onUpload:function(a){return c(b,"image",a[0].name)}}),(0,d.jsx)(h.Z,{defaultValue:a.name,id:"nameFlora_".concat(b),type:"text",label:"Name",onChange:function(a){return c(b,"name",a)}}),(0,d.jsx)(h.Z,{defaultValue:a.age,id:"ageFlora_".concat(b),type:"text",label:"Age",onChange:function(a){return c(b,"age",a)}}),(0,d.jsx)(h.Z,{defaultValue:a.roots,id:"rootsFlora_".concat(b),type:"text",label:"Root Structure",onChange:function(a){return c(b,"roots",a)}}),(0,d.jsx)(h.Z,{defaultValue:a.nutrients,id:"nutrientsFlora_".concat(b),type:"text",label:"Nutrient Source",onChange:function(a){return c(b,"nutrients",a)}}),(0,d.jsx)(h.Z,{defaultValue:a.elements,id:"elementsFlora_".concat(b),type:"text",label:"Elements",onChange:function(a){return c(b,"elements",a)}}),(0,d.jsx)(h.Z,{defaultValue:a.discovered,id:"discoveredFlora_".concat(b),type:"text",label:"Discovered",onChange:function(a){return c(b,"discovered",a)}}),(0,d.jsx)(h.Z,{defaultValue:a.description,id:"descriptionFlora_".concat(b),type:"text",label:"Brief description",onChange:function(a){return c(b,"description",a)}})]},b)})})}k.propTypes={details:f().array,onChange:f().func,deleteFlora:f().func}},7049:function(a,b){"use strict";b.Z=[{label:"Anastomus (Striders",value:"Anastomus"},{label:"Anomalous (Exotic Biome Creatures)",value:"Anomalous"},{label:"Bos (Spiders)",value:"Bos"},{label:"Bosoptera (Crawling beetles)",value:"Bosoptera"},{label:"Conokinis (Swarming beetles)",value:"Conokinis"},{label:"Felidae (Cat)",value:"Felidae"},{label:"Felihex (Hexapodal cat)",value:"Felihex"},{label:"Hexungulatis (Hexapodal cow)",value:"Hexungulatis"},{label:"Lok (Blobs)",value:"Lok"},{label:"Mechanoceris (Robot)",value:"Mechanoceris"},{label:"Mogara (Proto-Gek)",value:"Mogara"},{label:"Osteofelidae (Bonecats)",value:"Osteofelidae"},{label:"Prionterrae (Ploughs)",value:"Prionterrae"},{label:"Procavya (Rodents)",value:"Procavya"},{label:"Protosphaeridae (Protorollers)",value:"Protosphaeridae"},{label:"Prototerrae (Protodiggers)",value:"Prototerrae"},{label:"Rangifae (Diplos)",value:"Rangifae"},{label:"Reococcyx (Bipedal antelopes)",value:"Reococcyx"},{label:"Spiralis (Drills)",value:"Spiralis"},{label:"Talpidae (Moles)",value:"Talpidae"},{label:"Tetraceris (Antelopes)",value:"Tetraceris"},{label:"Theroma (Triceratops)",value:"Theroma"},{label:"Tyranocae (Tyrannosaurus)",value:"Tyranocae"},{label:"Ungulatis (Cow)",value:"Ungulatis"},{label:"Procavaquatica (Swimming rodents)",value:"Procavaquatica"},{label:"Bosaquatica (Underwater crabs)",value:"Bosaquatica"},{label:"Chrysaora (Jellyfish)",value:"Chrysaora"},{label:"Ictaloris (Fish)",value:"Ictaloris"},{label:"Prionace (Sharks)",value:"Prionace"},{label:"Prionacefda (Swimming cows)",value:"Prionacefda"},{label:"Agnelis (Birds)",value:"Agnelis"},{label:"Cycromys (Dragons)",value:"Cycromys"},{label:"Oxyacta (Flying snakes)",value:"Oxyacta"},{label:"Protocaeli (Protoflyers)",value:"Protocaeli"},{label:"Rhopalocera (Butterflies)",value:"Rhopalocera"}]},1065:function(a,b){"use strict";b.Z=[{label:"Lush",value:"Lush"},{label:"Barren",value:"Barren"},{label:"Dead",value:"Dead"},{label:"Exotic",value:"Exotic"},{label:"Mega Exotic",value:"Mega Exotic"},{label:"Scorched",value:"Scorched"},{label:"Frozen",value:"Frozen"},{label:"Toxic",value:"Toxic"},{label:"Irradiated",value:"Irradiated"},{label:"Marsh",value:"Marsh"},{label:"Volcanic",value:"Volcanic"}]},9066:function(a,b){"use strict";b.Z=[{label:"Rainy",value:"Rainy"},{label:"Verdant",value:"Verdant"},{label:"Tropical",value:"Tropical"},{label:"Viridescent",value:"Viridescent"},{label:"Paradise",value:"Paradise"},{label:"Temperate",value:"Temperate"},{label:"Humid",value:"Humid"},{label:"Overgrown",value:"Overgrown"},{label:"Flourishing",value:"Flourishing"},{label:"Grassy",value:"Grassy"},{label:"Bountiful",value:"Bountiful"},{label:"Barren",value:"Barren"},{label:"Desert",value:"Desert"},{label:"Rocky",value:"Rocky"},{label:"Bleak",value:"Bleak"},{label:"Parched",value:"Parched"},{label:"Abandoned",value:"Abandoned"},{label:"Dusty",value:"Dusty"},{label:"Desolate",value:"Desolate"},{label:"Wind-swept",value:"Wind-swept"},{label:"Terraforming Catastrophe",value:"Terraforming Catastrophe"},{label:"Dead",value:"Dead"},{label:"Empty",value:"Empty"},{label:"Desolate",value:"Desolate"},{label:"Lifeless",value:"Lifeless"},{label:"Forsaken",value:"Forsaken"},{label:"Life-Incompatible",value:"Life-Incompatible"},{label:"Low Atmosphere",value:"Low Atmosphere"},{label:"Airless",value:"Airless"},{label:"Abandoned",value:"Abandoned"},{label:"Fissured",value:"Fissured"},{label:"of Light",value:"of Light"},{label:"Breached",value:"Breached"},{label:"Rattling",value:"Rattling"},{label:"Spined",value:"Spined"},{label:"Skeletal",value:"Skeletal"},{label:"Bubbling",value:"Bubbling"},{label:"Frothing",value:"Frothing"},{label:"Foaming",value:"Foaming"},{label:"Contoured",value:"Contoured"},{label:"Cabled",value:"Cabled"},{label:"Webbed",value:"Webbed"},{label:"Mechanical",value:"Mechanical"},{label:"Metallic",value:"Metallic"},{label:"Metallurgic",value:"Metallurgic"},{label:"Hexagonal",value:"Hexagonal"},{label:"Plated",value:"Plated"},{label:"Scaly",value:"Scaly"},{label:"Fungal",value:"Fungal"},{label:"Sporal",value:"Sporal"},{label:"Capped",value:"Capped"},{label:"Finned",value:"Finned"},{label:"Bladed",value:"Bladed"},{label:"Shell-Strewn",value:"Shell-Strewn"},{label:"Ossified",value:"Ossified"},{label:"Petrified",value:"Petrified"},{label:"Calcified",value:"Calcified"},{label:"Columned",value:"Columned"},{label:"Sharded",value:"Sharded"},{label:"Pillared",value:"Pillared"},{label:"Shattered",value:"Shattered"},{label:"Fractured",value:"Fractured"},{label:"Fragmented",value:"Fragmented"},{label:"Crimson",value:"Crimson"},{label:"Planetary Anomaly",value:"Planetary Anomaly"},{label:"Lost Green",value:"Lost Green"},{label:"Lost Blue",value:"Lost Blue"},{label:"Lost Red",value:"Lost Red"},{label:"[REDACTED]",value:"[REDACTED]"},{label:"Stellar Corruption Detected",value:"Stellar Corruption Detected"},{label:"Chromatic Fog",value:"Chromatic Fog"},{label:"Vile Anomaly",value:"Vile Anomaly"},{label:"Harsh Blue Globe",value:"Harsh Blue Globe"},{label:"Vermillion Globe",value:"Vermillion Globe"},{label:"Toxic Anomaly",value:"Toxic Anomaly"},{label:"Frozen Anomaly",value:"Frozen Anomaly"},{label:"Scarlet",value:"Scarlet"},{label:"Doomed Jade",value:"Doomed Jade"},{label:"Azure",value:"Azure"},{label:"Blood",value:"Blood"},{label:"Haunted Emeril",value:"Haunted Emeril"},{label:"Cerulean",value:"Cerulean"},{label:"Wine Dark",value:"Wine Dark"},{label:"Deathly Green Anomaly",value:"Deathly Green Anomaly"},{label:"Ultramarine",value:"Ultramarine"},{label:"Charred",value:"Charred"},{label:"Arid",value:"Arid"},{label:"Scorched",value:"Scorched"},{label:"Hot",value:"Hot"},{label:"Fiery",value:"Fiery"},{label:"Boiling",value:"Boiling"},{label:"High Temperature",value:"High Temperature"},{label:"Torrid",value:"Torrid"},{label:"Incandescent",value:"Incandescent"},{label:"Scalding",value:"Scalding"},{label:"Frozen",value:"Frozen"},{label:"Icebound",value:"Icebound"},{label:"Arctic",value:"Arctic"},{label:"Glacial",value:"Glacial"},{label:"Sub-zero",value:"Sub-zero"},{label:"Icy",value:"Icy"},{label:"Frostbound",value:"Frostbound"},{label:"Freezing",value:"Freezing"},{label:"Hiemal",value:"Hiemal"},{label:"Hyperborean",value:"Hyperborean"},{label:"Toxic",value:"Toxic"},{label:"Poisonous",value:"Poisonous"},{label:"Noxious",value:"Noxious"},{label:"Corrosive",value:"Corrosive"},{label:"Acidic",value:"Acidic"},{label:"Caustic",value:"Caustic"},{label:"Acrid",value:"Acrid"},{label:"Blighted",value:"Blighted"},{label:"Miasmatic",value:"Miasmatic"},{label:"Rotting",value:"Rotting"},{label:"Irradiated",value:"Irradiated"},{label:"Radioactive",value:"Radioactive"},{label:"Contaminated",value:"Contaminated"},{label:"Nuclear",value:"Nuclear"},{label:"Isotopic",value:"Isotopic"},{label:"Decaying Nuclear",value:"Decaying Nuclear"},{label:"Gamma-Intensive",value:"Gamma-Intensive"},{label:"High Radio Source",value:"High Radio Source"},{label:"Supercritical",value:"Supercritical"},{label:"High Energy",value:"High Energy"},{label:"Marshy",value:"Marshy"},{label:"Swamp",value:"Swamp"},{label:"Tropical",value:"Tropical"},{label:"Foggy",value:"Foggy"},{label:"Misty",value:"Misty"},{label:"Boggy",value:"Boggy"},{label:"Endless Morass",value:"Endless Morass"},{label:"Quagmire",value:"Quagmire"},{label:"Hazy",value:"Hazy"},{label:"Cloudy",value:"Cloudy"},{label:"Vapour",value:"Vapour"},{label:"Reeking",value:"Reeking"},{label:"Murky",value:"Murky"},{label:"Damp",value:"Damp"},{label:"Lava",value:"Lava"},{label:"Magma",value:"Magma"},{label:"Erupting",value:"Erupting"},{label:"Volcanic",value:"Volcanic"},{label:"Ash-Shrouded",value:"Ash-Shrouded"},{label:"Ashen",value:"Ashen"},{label:"Tectonic",value:"Tectonic"},{label:"Unstable",value:"Unstable"},{label:"Violent",value:"Violent"},{label:"Molten",value:"Molten"},{label:"Flame-Ruptured",value:"Flame-Ruptured"},{label:"Imminent Core Detonation",value:"Imminent Core Detonation"},{label:"Obsidian Bead",value:"Obsidian Bead"},{label:"Basalt",value:"Basalt"},{label:"Infested Paradise",value:"Infested Paradise"},{label:"Infested",value:"Infested"},{label:"Worm-ridden",value:"Worm-ridden"},{label:"Toxic Horror",value:"Toxic Horror"},{label:"Boiling Doom",value:"Boiling Doom"},{label:"Radioactive Abomination",value:"Radioactive Abomination"},{label:"Icy Abhorrence",value:"Icy Abhorrence"},{label:"Tainted",value:"Tainted"},{label:"Xeno-Colony",value:"Xeno-Colony"},{label:"Caustic Nightmare",value:"Caustic Nightmare"},{label:"Fiery Dreadworld",value:"Fiery Dreadworld"},{label:"Mutated",value:"Mutated"},{label:"Frozen Hell",value:"Frozen Hell"},{label:"Infected Dustbowl",value:"Infected Dustbowl"},{label:"The Nest",value:"The Nest"},{label:"Corrupted",value:"Corrupted"},{label:"Terrorsphere",value:"Terrorsphere"}]},1143:function(a){a.exports={container:"fauna-details_container__cAm4F",fauna:"fauna-details_fauna__jh6iA",title:"fauna-details_title__cyzwI",deleteFauna:"fauna-details_deleteFauna__B67S8"}},5941:function(a){a.exports={container:"flora-details_container__dKOlJ",flora:"flora-details_flora__dS5Jh",title:"flora-details_title__8VO6n",deleteFlora:"flora-details_deleteFlora__pVSXz"}}}])