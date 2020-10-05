import React from "react";

export const Repos = ({repos}) => (
    <React.Fragment>
        {repos.map(x => (
            <div className="card mb-3" key={x.id}>
                <div className="card-body">
                    <h5>
                        <a
                            href={x.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >{x.name}</a>
                    </h5>
                </div>
            </div>
        ))}
    </React.Fragment>
)
