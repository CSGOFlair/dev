// The following script needs to be attached to something like a logic_script,
// but any other entity would work as the script will function regardless,
// as long as the entity is alive and the think function is set to Think()

// This can be found in hammer's sound picker
EXPLOSION_SOUND <- "c4.Explode";

// If this is defined it runs automatically when the script is created
function Precache()
{
	self.PrecacheScriptSound(EXPLOSION_SOUND);
}

// Every 0.1 seconds this checks if any decoy_projectiles exist on the map
// When found it compares the velocity of the projectile with a zeroed vector
// If true the decoy stopped moving so we can run the rest of the script.
// An env_explosion is created and configured, it's moved to the decoy's
// position and then triggered. The decoy is then killed.

function Think()
{
	ent <- null;
	while ((ent = Entities.FindByClassname(ent, "decoy_projectile")) != null)
	{
		if (ent.GetVelocity().Length() == Vector(0, 0, 0).Length())
		{
			owner <- ent.GetOwner();
			origin <- ent.GetOrigin();

			exp <- Entities.CreateByClassname("env_explosion");
			exp.__KeyValueFromInt("iMagnitude", 2000);

			ent.EmitSound(EXPLOSION_SOUND);

			exp.SetOrigin(origin);
			exp.SetOwner(owner);

			EntFireByHandle(exp, "Explode", "", 0.1, owner, owner);
			ent.Destroy();
			DispatchParticleEffect("explosion_c4_500", origin, origin);
		}
	}
}
