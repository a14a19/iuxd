import "./services.css"

function Services() {
  
    return (
      <div className="service-container">
            <header className="header">

                <p>Services</p>
                
                
            </header>

            <section className="services-section">
            <div className="service-row">
                        <div className="heading-content">
                            <h1>Discover everything we do.</h1>
                        </div>
                        <div className="heading-content">
                           
                            <p>Although we are well known for our work with Design Systems, we also help large companies to accelerate or streamline their product operations with different operating models, mixing design, technology and, more recently, artificial intelligence.</p>
                        </div>
                        
                    </div>
                <hr></hr>
                <div className="service-content">
                    <div className="service-row">
                     
                        <div className="heading-content">
                            <h1>Design System</h1>
                            <p>We were pioneers and are a reference when it comes to Design Systems. We recently launched Design System as a Service, a mix of software, service and artificial intelligence to do this faster, with higher quality and, as if that weren't enough, cheaper.</p>
                        </div>
                        <div className="heading-content">
                            <h1>DS Team</h1>
                            <p>We can also be your squad of super experts to accelerate implementation and enhance the impact of the Design System in your organization. In this format, we work with designers, devs and product people trained and managed by us.</p>
                        </div>
                    </div>

                    <div className="service-row">
                        <div className="heading-content">
                            <h1>Chapter as a Service</h1>
                            <p>We work on the outsourcing model to build your design and front end chapters (web and mobile). The cool thing is that because we know how to work from a Design System, we need much fewer people to deliver the same as other consultancies, generally less than half.</p>
                        </div>
                        <div className="heading-content">
                            <h1>Org & AI Ops</h1>
                            <p>These are two complimentary services that we offer to enhance our clients’ results. The first is about rethinking the way the entire product team organizes itself in search of more efficient formats. The second is about monitoring tools and hypotheses for applying AI in the product workflow, from design to development.</p>
                        </div>
                        
                    </div>

                    
                    
                </div>
                <hr></hr>
              
            </section>
            <div className="service-row">
                        <div className="heading-content">
                            
                            <p>Partner with us!</p>
                        </div>
                        <div className="heading-content">
                            
                            <p>We can help in many ways, including helping you see what you really need.</p>
                            <footer className="footer">
               
                             <button onClick={() => console.log('Let\'s talk!')}>Let's talk!</button>
                           </footer>
                        </div>
                        
                    </div>

          
        </div>
    )
  }
  
  export default Services