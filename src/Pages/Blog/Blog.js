import React from "react";
import useTitle from "../../hooks/useTitle";

export default function Accordion() {
    useTitle('Blog')
    return (
        <div className="bg-base-200 p-10 my-10 rounded-lg">
            <div className="w-full px-8 mx-auto mt-20 space-y-2 shadow ">
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">Difference between SQL and NoSQL?</summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-white">
                            1. SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database. <br /> <br />
                            2. Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases. <br /> <br />
                            3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br /> <br />
                            4. SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data. <br /> <br />
                            5. Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.

                        </p>
                    </div>
                </details>
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        What is JWT, and how does it work?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-white">
                            JWT TOKEN: JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                            It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                            The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. <br /><br />
                            How It Works: Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. <br />
                            1. User sign-in using username and password or google/facebook. <br />
                            2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                            3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                            4. Resource server then verifies the authenticity of the token using the secret salt/ public key.
                        </p>
                    </div>
                </details>
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        What is the difference between JavaScript and NodeJS?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-white">
                            1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. <br />

                            As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br /> <br />

                            2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br /> <br />

                            3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br /> <br />

                            4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                            Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive. <br /> <br />

                            5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

                            Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.
                        </p>
                    </div>
                </details>
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        How does NodeJS handle multiple requests at the same time?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-white">
                            NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy.
                            <br /> <br />
                            When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    );
}