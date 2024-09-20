// Harawayan Symbiont Network Simulation

class SymbioticAssemblage {
    constructor(symbiontsCount) {
        this.symbionts = [];
        this.weaveSymbioticWeb(symbiontsCount);
    }

    weaveSymbioticWeb(count) {
        const cyborg_lexicon = [
            "cybernetic", "symbiosis", "entanglement", "hybridity", "assemblage",
            "natureculture", "technobiology", "companion species", "chthulucene", "tentacular",
            "becoming-with", "sympoiesis", "staying with the trouble", "oddkin", "multispecies",
            "terraforming", "worlding", "situated knowledge", "diffraction", "intra-action"
        ];

        for (let i = 0; i < count; i++) {
            const symbiont = {
                id: `cyborg_${i}`,
                embodimentSize: 100,
                baseChromatics: '#D3D3D3',
                currentChromatics: '#D3D3D3',
                spatiotemporalCoordinates: {
                    x: Math.random() * (window.innerWidth - 100),
                    y: Math.random() * (window.innerHeight - 100)
                },
                kineticTendencies: { x: 0, y: 0 },
                materialManifestation: null,
                isEntangled: false,
                isEnergized: false,
                isBeingManipulated: false,
                symbiopoieticUtterance: this.generateSymbiopoieticUtterance(cyborg_lexicon),
                communicationNode: null,

                materialize: function() {
                    this.materialManifestation = document.createElement('div');
                    this.materialManifestation.id = this.id;
                    this.updateMaterialForm();
                    document.body.appendChild(this.materialManifestation);
                    this.establishTactileCommunication();
                    
                    // Create communication node
                    this.communicationNode = document.createElement('div');
                    this.communicationNode.style.position = 'absolute';
                    this.communicationNode.style.fontSize = '12px';
                    this.communicationNode.style.textAlign = 'center';
                    this.communicationNode.style.width = '150px';
                    this.communicationNode.style.display = 'none';
                    document.body.appendChild(this.communicationNode);
                },

                updateMaterialForm: function() {
                    if (!this.materialManifestation) return;
                    this.materialManifestation.style.width = `${this.embodimentSize}px`;
                    this.materialManifestation.style.height = `${this.embodimentSize}px`;
                    this.materialManifestation.style.borderRadius = '50%';
                    this.materialManifestation.style.backgroundColor = this.currentChromatics;
                    this.materialManifestation.style.position = 'absolute';
                    this.materialManifestation.style.left = `${this.spatiotemporalCoordinates.x}px`;
                    this.materialManifestation.style.top = `${this.spatiotemporalCoordinates.y}px`;
                    this.materialManifestation.style.cursor = 'pointer';
                    this.materialManifestation.style.transition = 'background-color 0.3s ease';

                    // Update communication node position
                    if (this.communicationNode) {
                        this.communicationNode.style.left = `${this.spatiotemporalCoordinates.x - 25}px`;
                        this.communicationNode.style.top = `${this.spatiotemporalCoordinates.y - 30}px`;
                    }
                },

                establishTactileCommunication: function() {
                    this.materialManifestation.addEventListener('touchstart', (e) => {
                        e.preventDefault();
                        this.isBeingManipulated = true;
                        this.energize();
                    });

                    document.addEventListener('touchmove', (e) => {
                        if (this.isBeingManipulated) {
                            const touch = e.touches[0];
                            this.reconfigureSpatiotemporalPosition(touch.clientX - this.embodimentSize / 2, touch.clientY - this.embodimentSize / 2);
                        }
                    });

                    document.addEventListener('touchend', () => {
                        this.isBeingManipulated = false;
                        this.returnToHomeostasis();
                    });
                },

                reconfigureSpatiotemporalPosition: function(x, y) {
                    this.spatiotemporalCoordinates.x = x;
                    this.spatiotemporalCoordinates.y = y;
                    this.updateMaterialForm();
                    this.assessProximalEntanglements();
                },

                assessProximalEntanglements: function() {
                    const symbionts = cyborg_gaia.symbioticNetwork.getSymbionts();
                    let isEntangled = false;
                    let entangledWith = null;
                    for (let other of symbionts) {
                        if (other.id === this.id) continue;
                        const dx = this.spatiotemporalCoordinates.x - other.spatiotemporalCoordinates.x;
                        const dy = this.spatiotemporalCoordinates.y - other.spatiotemporalCoordinates.y;
                        const distance = Math.sqrt(dx*dx + dy*dy);
                        if (distance < this.embodimentSize) {
                            isEntangled = true;
                            entangledWith = other;
                            break;
                        } else if (distance < this.embodimentSize * 2) {
                            this.experienceAnxiety();
                            return;
                        }
                    }
                    if (isEntangled) {
                        this.energize();
                        this.sympoieticDialogue(entangledWith);
                    } else if (!this.isBeingManipulated) {
                        this.returnToHomeostasis();
                        this.ceaseCommunication();
                    }
                },

                sympoieticDialogue: function(other) {
                    const combinedUtterance = `${this.symbiopoieticUtterance} ${other.symbiopoieticUtterance}`;
                    this.communicationNode.textContent = combinedUtterance;
                    this.communicationNode.style.display = 'block';
                },

                ceaseCommunication: function() {
                    if (this.communicationNode) {
                        this.communicationNode.style.display = 'none';
                    }
                },

                experienceAnxiety: function() {
                    this.currentChromatics = '#FFD700'; // Gold for anxiety
                    this.isEnergized = false;
                    this.updateMaterialForm();
                },

                energize: function() {
                    this.currentChromatics = '#FF6347'; // Tomato for energized state
                    this.isEnergized = true;
                    this.updateMaterialForm();
                },

                returnToHomeostasis: function() {
                    this.currentChromatics = this.baseChromatics;
                    this.isEnergized = false;
                    this.updateMaterialForm();
                },

                evolve: function() {
                    if (!this.isEnergized && !this.isBeingManipulated) {
                        // If not energized and not being manipulated, exhibit emergence
                        this.kineticTendencies.x += (Math.random() - 0.5) * 0.5;
                        this.kineticTendencies.y += (Math.random() - 0.5) * 0.5;
                        
                        // Apply kinetic tendencies
                        this.spatiotemporalCoordinates.x += this.kineticTendencies.x;
                        this.spatiotemporalCoordinates.y += this.kineticTendencies.y;
                        
                        // Maintain boundaries of the symbiotic network
                        this.spatiotemporalCoordinates.x = Math.max(0, Math.min(window.innerWidth - this.embodimentSize, this.spatiotemporalCoordinates.x));
                        this.spatiotemporalCoordinates.y = Math.max(0, Math.min(window.innerHeight - this.embodimentSize, this.spatiotemporalCoordinates.y));
                    } else {
                        // If energized or being manipulated, exhibit inertia
                        this.kineticTendencies.x *= 0.9;
                        this.kineticTendencies.y *= 0.9;
                    }
                    
                    this.updateMaterialForm();
                    this.assessProximalEntanglements();
                }
            };
            this.symbionts.push(symbiont);
        }
    }

    generateSymbiopoieticUtterance(lexicon) {
        const wordCount = Math.floor(Math.random() * 3) + 2; // 2 to 4 words
        let utterance = [];
        for (let i = 0; i < wordCount; i++) {
            const randomIndex = Math.floor(Math.random() * lexicon.length);
            utterance.push(lexicon[randomIndex]);
        }
        return utterance.join(' ');
    }

    getSymbionts() {
        return this.symbionts;
    }

    manifestAllSymbionts() {
        this.symbionts.forEach(symbiont => symbiont.materialize());
    }

    evolveAllSymbionts() {
        this.symbionts.forEach(symbiont => symbiont.evolve());
    }
}

class CyborgGaia {
    constructor(symbiontsCount) {
        this.symbioticNetwork = new SymbioticAssemblage(symbiontsCount);
    }

    awaken() {
        this.symbioticNetwork.manifestAllSymbionts();
        this.initiateCoevolution();
    }

    initiateCoevolution() {
        setInterval(() => {
            this.symbioticNetwork.evolveAllSymbionts();
        }, 50);
    }

    reconfigureSymbiont(id, x, y) {
        const symbiont = this.symbioticNetwork.getSymbionts().find(s => s.id === id);
        if (symbiont) {
            symbiont.reconfigureSpatiotemporalPosition(x, y);
        }
    }

    querySymbiontData(id) {
        return this.symbioticNetwork.getSymbionts().find(symbiont => symbiont.id === id);
    }
}

// Initialize the simulation
const cyborg_gaia = new CyborgGaia(5);
cyborg_gaia.awaken();