using System.Collections;
using System.Collections.Generic;
using UnityEngine;
//taking notes so I can remember
/*(public class PlayerController : MonoBehaviour
{
    public Rigidbody2D rb; // public can be selected outside this class
    public Animator anim;
    private void Update() //update is called every frame 
    {
        if (Input.GetKey(KeyCode.A)) //move left depending on boolean of GetKey (true/false)
        {
            rb.velocity = new Vector2(-5, rb.velocity.y); //Vector2 holds (x,y)
            transform.localScale = new Vector2(-1, 1); //flipleft
            anim.SetBool("running", true); //set the animation parameter we created "running" to true
        }
        else if (Input.GetKey(KeyCode.D)) //move right
        {
            rb.velocity = new Vector2(5, rb.velocity.y);
            transform.localScale = new Vector2(1, 1);
            anim.SetBool("running", true);
        }
        else
        {
            anim.SetBool("running", false);
        }
        if (Input.GetKeyDown(KeyCode.Space)) //jump
        {
            rb.velocity = new Vector2(rb.velocity.x, 20);
        }
    }
} */ 
public class PlayerController : MonoBehaviour //learning private variables and using the unity movement system parameters
{
    [SerializeField] private Rigidbody2D rb; // private cannot be selected from unity unless using the Serializer
    [SerializeField] private Animator anim;
    private enum State {idle, running, jumping, falling} //create an enumerator that can only be one of these at a time. Sort of like an array.
    private State state = State.idle; //setting the enum->State to be idle. Finite state.
    private Collider2D coll;
    [SerializeField] private LayerMask ground; //creates a layermask we can reference inside the jump. Serialized so we can access it in unity.

    private void Start() //only run once at the start of the code
    {
        rb = GetComponent<Rigidbody2D>(); //this will set the variable to the component and it won't be visible if it's not public or serialized
        anim = GetComponent<Animator>();
        coll = GetComponent<Collider2D>(); //allows us access to the collider2D
    }


    private void Update() //update is called every frame 
    {
        float hDirection = Input.GetAxis("Horizontal"); //setting a variable for the Horizontal parameter found in input manager
        if (hDirection < 0) 
        {
            rb.velocity = new Vector2(-5, rb.velocity.y); //Vector2 holds (x,y)
            transform.localScale = new Vector2(-1, 1); //flipleft
        }
        else if (hDirection > 0) //move right
        {
            rb.velocity = new Vector2(5, rb.velocity.y);
            transform.localScale = new Vector2(1, 1);
        }
        else
        {
        }
        if (Input.GetButtonDown("Jump") && coll.IsTouchingLayers(ground)) //jump using the Jump from input manager
        {
            rb.velocity = new Vector2(rb.velocity.x, 20);
            state = State.jumping; //set state to jumping
            Debug.Log(State.jumping);
        }

        VelocityState();
        anim.SetInteger("state", (int)state); //pulls the integer associated with the enum State
    }
    private void VelocityState() //set a state based on velocity
    {
        if(state == State.jumping) //if jumping don't even check for sideways velocity 
        {
            if(rb.velocity.y < .1f)
            {
                state = State.falling;
                Debug.Log(State.falling);
            }
        }
        else if(state == State.falling)
        {
            if (coll.IsTouchingLayers(ground))
            {
                state = State.idle;
            }
        }

        else if(Mathf.Abs(rb.velocity.x) > 1f) //If you're moving at all right. Creating an absolute from a float
        {
            state = State.running;
        }
        else
        {
            state = State.idle;
        }
    }
}
