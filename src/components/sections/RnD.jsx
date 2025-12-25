import './RnD.css';

const RnD = () => {
    const researchAreas = [
        {
            category: "Aquaculture Research & Development",
            items: [
                {
                    title: "Probiotic Strain Development",
                    description: "Isolation and formulation of Bacillus spp., Rhodobacter, and Rhodopseudomonas strains with high enzymatic activity and pathogen control. Emphasis on anaerobic strains to enhance sludge degradation and nitrogen cycle stabilization."
                },
                {
                    title: "Bio-based Inputs",
                    description: "Development of microbial consortia for reduction of organic load, ammonia, and hydrogen sulfide. Formulation of natural prebiotics and organic acids to support gut health in Penaeus vannamei."
                }
            ]
        },
        {
            category: "Agricultural Research & Development",
            items: [
                {
                    title: "Microbial Biofertilizers",
                    description: "Development of PGPR strains for nitrogen fixation, phosphate solubilization, and siderophore activity. Customized rhizosphere colonization strategies for varied agro-climatic soils."
                },
                {
                    title: "Biostimulants & Crop Enhancers",
                    description: "Formulation of fermented botanical extracts and microbial metabolites to promote plant growth and flowering. Incorporation of chelated amino acids and humic substances for improved nutrient uptake."
                },
                {
                    title: "Biological Disease Management",
                    description: "Biofungicide development targeting specific pathogens while promoting plant-soil health through advanced microbial interactions."
                }
            ]
        },
        {
            category: "Poultry Research & Development",
            items: [
                {
                    title: "Probiotic Feed Supplements",
                    description: "Multi-strain probiotic formulations with high acid and bile tolerance. Enzyme blends to improve cereal-based feed digestibility."
                },
                {
                    title: "Antibiotic Growth Promoter (AGP) Alternatives",
                    description: "Development of phytobiotic-probiotic synergies to enhance immunity and intestinal health."
                },
                {
                    title: "Pathogen Mitigation Strategies",
                    description: "Natural antimicrobials effective against Salmonella, E. coli, and Clostridium species. Controlled trials on feed conversion, weight gain, and antibody response."
                }
            ]
        }
    ];

    return (
        <section className="rnd section section-dark" id="herbozone-lab">
            <div className="container">
                <div className="section-header">
                    <h2>Research & <span className="text-green">Development</span></h2>
                    <p className="rnd__subtitle">
                        Pioneering Microbial and Bio-based Innovations for Agriculture, Aquaculture, and Poultry Systems
                    </p>
                </div>

                <div className="rnd__grid-detailed">
                    {researchAreas.map((area, index) => (
                        <div key={index} className="rnd__category">
                            <h3 className="rnd__category-title">{area.category}</h3>
                            <div className="rnd__items">
                                {area.items.map((item, i) => (
                                    <div key={i} className="rnd__item">
                                        <h4 className="rnd__item-title">{item.title}</h4>
                                        <p className="rnd__item-description">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default RnD;
