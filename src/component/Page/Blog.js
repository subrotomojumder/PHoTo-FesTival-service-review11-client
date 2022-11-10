import React from 'react';
import { useTitle } from '../../Hooks/UseTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='mx-8 lg:mx-16 mb-10'>
            <h2 className='text-center mt-6 text-2xl text-cyan-600'>Question and Answer</h2>
            <div>
                <h5 className='text-lg font-semibold mt-4'>Q.1. Difference between SQL and NoSQL?</h5>
                <blog className='ml-3'><span className='font-bold text-blue-400'>Ans: </span> SQL, NoSQL
                    When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL)
                    data structure. While both the databases are viable options still there are certain key differences between.
                    <br />
                    <p className='ml-7 mt-2'><span className='font-semibold'>1. Type: </span>SQL databases are primarily called as Relational Databases (RDBMS);
                        whereas NoSQL database are primarily called as non-relational or distributed database. </p>
                    <p className='ml-7 mt-2'><span className='font-semibold'>2. Language: </span> SQL databases defines and manipulates data based structured query
                        language (SQL). But from other side it can be restrictive.  SQL requires you to use predefined schemas to determine the structure of your data
                        before you work with it. A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be
                        document-oriented, column-oriented, graph-based or organized as a KeyValue store. Also each document can have its own unique structure.
                        SQL databases have fixed or static or predefined schema . NoSQL database dynamic schema.</p>
                    <p className='ml-7 mt-2'><span className='font-semibold'>3. Scalability: </span>
                        In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing
                        things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by
                        sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings
                        to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or
                        ever-changing data sets.
                    </p>
                    <p className='ml-7 mt-2'><span className='font-semibold'>4. Structure: </span>
                        SQL databases are best suited for complex queries and NoSQL databases are not so good for complex queries.
                    </p>
                    <p className='ml-7 mt-2'><span className='font-semibold'>5. Property followed: </span>
                        SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem
                        (Consistency, Availability and Partition tolerance)
                    </p>
                    <p className='ml-7 mt-2'><span className='font-semibold'>5. support: </span>
                        A lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database
                        you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments.
                    </p>
                </blog>
            </div>
            <div>
                <h5 className='text-lg font-semibold mt-4'>Q.2. What is JWT, and how does it work?</h5>
                <blog className='ml-3'><span className='font-bold text-blue-400'>Ans: </span> JSON Web Token, is an open standard used to share security information between two parties — a
                    client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the
                    claims cannot be altered after the token is issued.
                    <br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are
                    depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The signature ensures that the token hasn’t
                    been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to
                    the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </blog>
            </div>
            <div>
                <h5 className='text-lg font-semibold mt-4'>Q.3. What is the difference between javascript and NodeJS?</h5>
                <blog className='ml-3'><span className='font-bold text-blue-400'>Ans: </span>
                    <p className='ml-7 mt-2'> 1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js,
                        on the other hand, is a V8-based server-side programming language.
                    </p>
                    <p className='ml-7 mt-2'> 2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other
                        hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                    </p>
                    <p className='ml-7 mt-2'> 3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand,
                        only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                    </p>
                    <p className='ml-7 mt-2'> 4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.
                        <br /> Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants.
                    </p>
                </blog>
            </div>
            <div>
                <h5 className='text-lg font-semibold mt-4'>Q.4. How does NodeJS handle multiple requests at the same time?</h5>
                <blog className='ml-3'><span className='font-bold text-blue-400'>Ans: </span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept
                    of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple
                    requests parallelly using the NodeJS cluster module or worker_threads module.
                </blog>
            </div>
        </div>
    );
};

export default Blog;