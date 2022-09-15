export interface DataI {
    posts?: Array<any>
    comments?: Array<any>
    users?: Array<any>
    loading?: boolean
    error?: any
    postsWithUsers?: Array<any>
    [key: string]: any
}

// Hello from 

export interface HelloTextI {
    helloText: (name: string) => void
}
