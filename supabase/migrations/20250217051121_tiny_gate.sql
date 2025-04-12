/*
  # Initial Schema for Anchor Hair Salon

  1. New Tables
    - services
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - price (integer, in cents)
      - duration (integer, in minutes)
      - created_at (timestamp)
    
    - stylists
      - id (uuid, primary key)
      - name (text)
      - bio (text)
      - image_url (text)
      - specialties (text[])
      - created_at (timestamp)
    
    - appointments
      - id (uuid, primary key)
      - service_id (uuid, foreign key)
      - stylist_id (uuid, foreign key)
      - client_id (uuid, foreign key)
      - appointment_date (date)
      - appointment_time (time)
      - status (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Services Table
CREATE TABLE services (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    description text NOT NULL,
    price integer NOT NULL,
    duration integer NOT NULL,
    created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services are viewable by everyone"
    ON services FOR SELECT
    USING (true);

-- Stylists Table
CREATE TABLE stylists (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    bio text NOT NULL,
    image_url text NOT NULL,
    specialties text[] NOT NULL,
    created_at timestamptz DEFAULT now()
);

ALTER TABLE stylists ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Stylists are viewable by everyone"
    ON stylists FOR SELECT
    USING (true);

-- Appointments Table
CREATE TABLE appointments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    service_id uuid REFERENCES services(id),
    stylist_id uuid REFERENCES stylists(id),
    client_id uuid REFERENCES auth.users(id),
    appointment_date date NOT NULL,
    appointment_time time NOT NULL,
    status text NOT NULL CHECK (status IN ('pending', 'confirmed', 'cancelled')),
    created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own appointments"
    ON appointments FOR SELECT
    TO authenticated
    USING (client_id = auth.uid());

CREATE POLICY "Users can create their own appointments"
    ON appointments FOR INSERT
    TO authenticated
    WITH CHECK (client_id = auth.uid());

CREATE POLICY "Users can update their own appointments"
    ON appointments FOR UPDATE
    TO authenticated
    USING (client_id = auth.uid())
    WITH CHECK (client_id = auth.uid());