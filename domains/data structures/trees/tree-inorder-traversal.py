"""
Complete the inOrder function in your editor below, which has 1 parameter: a pointer to the root of a binary tree. It must print the values in the tree's inorder traversal as a single line of space-separated values.

Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.data (the value of the node)
"""
def inOrder(root):
    #Write your code here
    if(root == None):
        return
    else:
        inOrder(root.left)
        print(root.data, end=" ")
        inOrder(root.right)
