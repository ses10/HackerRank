   /*
    The height of a binary tree is the number of edges between the tree's root and its furthest leaf. This means that a tree containing a single node has a height of 0.

    Complete the height function provided in your editor so that it returns the height of a binary tree. This function has a parameter, root, which is a pointer to the root node of a binary tree.    


    class Node 
       int data;
       Node left;
       Node right;
   */

   /***
    To calculate the height of a binary tree recursively get the height of the 
    right and left subtrees, get the max of the two, and return the max + 1

   **/

   int height(Node root)
    {
         if(root == null)
             return -1;
         else
         {
            int leftMax = height(root.left);    
            int rightMax = height(root.right);
            return (Math.max(leftMax, rightMax) + 1);
         }
    }