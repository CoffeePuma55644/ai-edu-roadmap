-- Create learning_roadmaps table
CREATE TABLE public.learning_roadmaps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  level TEXT NOT NULL,
  time_commitment TEXT NOT NULL,
  goals TEXT NOT NULL,
  preferred_style TEXT NOT NULL,
  additional_info TEXT,
  ai_generated_roadmap JSONB,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'confirmed', 'in_progress', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on learning_roadmaps
ALTER TABLE public.learning_roadmaps ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for learning_roadmaps
CREATE POLICY "Users can view their own roadmaps" 
ON public.learning_roadmaps 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own roadmaps" 
ON public.learning_roadmaps 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own roadmaps" 
ON public.learning_roadmaps 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own roadmaps" 
ON public.learning_roadmaps 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create trigger for automatic timestamp updates on learning_roadmaps
CREATE TRIGGER update_learning_roadmaps_updated_at
  BEFORE UPDATE ON public.learning_roadmaps
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();