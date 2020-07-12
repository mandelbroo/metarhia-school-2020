# Parallel, Concurrent and Distributed systems

# CAP theorem

# Types of tasks:
- big data offline processing (Hadoop etc)
- big data storage (HFS)
- interactive systems (typical web)
- real time systems (specialized medical, oil, robots software) (No garbage collector, no asynchronicity)

# Parallel and Async programming problems:
- Race condition, Deadlock, Live Lock
(Resource Starvation precursor of deadlock and livelock)
- Solutions:
  * Distributed memory (OpenMP) / [Intereact through shared memory]
  * Actors MPI [Interact through messaging where actors has isolated memory]
- Abstractions: Semaphore, Mutex, Bariers, Blockings, Spinlocks, Critical Section, Transactional memory, Conditional variables

## Notes
- Monad (Promise is monad like but has a state)
- Futures
- Open constructor (fe "new Promise")
- Async iterator
- Cursor
- Thenable
- Semaphore

# Isolation

- Queue [channel of service] (канал обслуговування):
 * priority
 * queue size limit
 * timeout
 * avg service time
 * min service time
 * queue timeout

- Queue theory

Apache does not support Queues. That's why Ngix is more popular (few times bigger performance)

# TO GET ASYNC PROGRAMMING BETTER BUILD OWN:
Parallel and Series executor of array of callbacks